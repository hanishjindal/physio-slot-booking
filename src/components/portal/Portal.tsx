'use client'
import React, { useEffect, useState } from 'react'
import { DAYS, FILTER, SCHEDULE } from '../config'
import Button from '../common/Button'
import { FaFilter } from 'react-icons/fa'
import Modal from '../common/Modal'
import toast from 'react-hot-toast';
import { selectUser } from '@/redux/slice/authSlice'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Slots } from '@prisma/client'

type userArray = { name: string, email: string };

const Portal = () => {
    const user = useSelector(selectUser);
    const [originalSlotList, setOriginalSlotList] = useState<any[]>([])
    const [slotList, setSlotList] = useState<any>([]);
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [selectedSlot, setSelectedSlot] = useState<string>('');
    const [selectedSlotList, setSelectedSlotList] = useState<string[]>([]);
    const [physioSelectList, setPhysioSelectList] = useState<string[]>([]);
    const [userSelectList, setUserSelectList] = useState<userArray[]>([])
    const [physioList, setPhysioList] = useState<Slots[]>([]);
    const [physioData, setPhysioData] = useState<Slots>();
    const [selectedPhysio, setSelectedPhysio] = useState<string>('');
    const [selectedPatient, setSelectedPatient] = useState<string>('');
    const [filter, setFilter] = useState<string>(FILTER[0]);
    const [booking, setBooking] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            fetchPhysio();
        });
    }, [])

    const fetchPhysio = async () => {
        setIsSubmitting(true);
        try {
            if (user?.role === "PHYSIO") {
                const res = await axios.post("/api/portal/fetch-physio-data", {});
                const data = res?.data?.data;
                setPhysioData(data);
                setOriginalSlotList(SCHEDULE)
                setSlotList(SCHEDULE);
            } else {
                const res = await axios.post("/api/portal/fetch-physio-list", {});
                const data: Slots[] = res?.data?.data;
                setPhysioList(data);
                mapSlotData(data);
            }
        } catch (error: any) {
            toast.error(error?.response?.data?.message ?? 'Something went wrong')
        } finally {
            handleReset();
        }
    }

    const mapSlotData = (data: Slots[], day?: string) => {
        const availableSlots: string[] = [];
        const availableSlotsObj: any[] = [];
        data.forEach(element => {
            const slot = JSON.parse(element.availableSlots);
            // const slotDayList = Object.keys(slot);
            // slotDayList.forEach(days => {
            const dayArray: string[] = slot[day ?? selectedDate];
            if (Array.isArray(dayArray)) {
                dayArray.forEach(time => {
                    if (!availableSlots.includes(time)) {
                        const tempSchedule = SCHEDULE.filter((itm, _) => itm.slot === time);
                        availableSlotsObj.push(tempSchedule[0])
                        availableSlots.push(time)
                    }
                })
            }
            // });
        });
        if (availableSlotsObj.length > 1) {
            availableSlotsObj.sort((a, b) => {
                let timeSplit = a.slot.split(' ');
                const timeA = getTimeInMinutes(timeSplit[0], timeSplit[timeSplit.length - 1]);
                timeSplit = b.slot.split(' ');
                const timeB = getTimeInMinutes(timeSplit[0], timeSplit[timeSplit.length - 1]);
                return timeA - timeB;
            });
        }
        setSlotList(availableSlotsObj);
        setOriginalSlotList(availableSlotsObj);
    }

    function getTimeInMinutes(timeStr: string, format: string) {
        let [hours, minutes] = timeStr.split(':').map(Number);
        if (format === 'PM' && hours !== 12) {
            hours += 12;
        }
        return hours * 60 + minutes;
    }

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value;
        if (e.target.name === 'physio') {
            setSelectedPhysio(val);
        } else {
            setSelectedPatient(val);
        }
        setError(false);
    }

    const handleReset = () => {
        setBooking(false);
        setError(false);
        setIsSubmitting(false);
        setSelectedPatient('');
        setSelectedSlot('');
        setSelectedPhysio('')
        setSelectedDate('')
    }

    const handleFilter = (index: number) => {
        const time = FILTER[index];
        if (time !== FILTER[0]) {

            const filteredSchedule = originalSlotList?.filter((item, _) => item.timeOfDay === time);
            setSlotList(filteredSchedule)
        } else {
            setSlotList(originalSlotList)

        }
        setFilter(time);
    }

    const handleSlotInsert = (slot: string) => {
        if (!selectedDate) {
            toast.error("Select day first");
            return;
        }
        const index = selectedSlotList.indexOf(slot);
        if (index !== -1) {
            const updatedList = [...selectedSlotList];
            updatedList.splice(index, 1);
            setSelectedSlotList(updatedList)
        } else {
            setSelectedSlotList([...selectedSlotList, slot])
        }
    }

    const handleBookConfirm = async () => {
        if (!selectedPatient) {
            setError(true)
            return;
        }
        setIsSubmitting(true)
        try {
            const res = await axios.post("/api/portal/book-slot", {
                day: selectedDate,
                slot: selectedSlot,
                physio: selectedPhysio,
                patient: selectedPatient
            });
            const data = res?.data?.data;
            setPhysioList(data);
            toast.success('Booked...')
        } catch (error: any) {
            toast.error(error?.response?.data?.message ?? 'Something went wrong')
        } finally {
            handleReset();
        }
    }

    const handleSlotSelection = (slot: string) => {
        setSelectedSlot(slot);
        const physioArray: string[] = []
        physioList.forEach(physio => {
            const availableSlots = JSON.parse(physio?.availableSlots)[selectedDate];
            if (Array.isArray(availableSlots) && availableSlots.includes(slot)) [
                physioArray.push(physio?.name)
            ]
        })
        setPhysioSelectList(physioArray);
    }

    const scheduleMap = () => {
        try {
            if (slotList.length > 0 && selectedDate) {
                if (user?.role === "PHYSIO" && slotList.length > 0) {
                    let bookedList: string[] = [];
                    if (physioData?.bookedSlots) {
                        bookedList = JSON.parse(physioData?.bookedSlots)[selectedDate] ?? [];
                    }
                    return (
                        slotList.map((time: any, index: number) => {
                            return (
                                <span
                                    key={`${selectedDate}${index}`}
                                    className={`col-span-6 sm:col-span-4 xl:col-span-3 rounded-full font-semibold cursor-pointer p-2 px-4 h-fit text-center border-2 text-sm lg:text-md ${(selectedSlotList.includes(time?.slot)) ? "bg-blue-500 text-white" : (bookedList.includes(time?.slot) ? "border-gray-500 !cursor-not-allowed" : "border-blue-500 bg-blue-100 text-blue-500")}`}
                                    onClick={() => {
                                        if (!bookedList.includes(time?.slot)) {
                                            handleSlotInsert(time?.slot)
                                        }
                                    }}
                                >
                                    {time?.slot}
                                </span>
                            )
                        })
                    )
                } else {
                    return (
                        slotList.map((time: any, index: number) => {
                            return (
                                <span
                                    key={index}
                                    className={`col-span-6 sm:col-span-4 xl:col-span-3 rounded-full font-semibold cursor-pointer p-2 px-4 h-fit text-center border-2 text-sm lg:text-md ${selectedSlot === time?.slot ? "bg-blue-500 text-white" : "border-blue-500 bg-blue-100 text-blue-500"}`}
                                    onClick={() => {
                                        handleSlotSelection(time?.slot)
                                    }}
                                >
                                    {time?.slot}
                                </span>
                            )
                        })
                    )
                }
            } else if (!selectedDate) {
                return (
                    <span className='col-span-6 p-2 px-4 text-gray-600'>Select day</span>
                )
            } else {
                return (
                    <span className='col-span-6 p-2 px-4 text-gray-600'>No slot available</span>
                )
            }
        } catch (error) {
            return <></>
        }
    }

    const handleBook = async () => {
        if (selectedDate && selectedPhysio && selectedSlot) {
            setBooking(true);
            if (user?.role === "SALES") {
                setIsSubmitting(true)
                try {
                    const res = await axios.post("/api/user/all-user-list", {});
                    const data = res?.data?.data;
                    setUserSelectList(data);
                } catch (error: any) {
                    toast.error(error?.response?.data?.message ?? 'Something went wrong')
                } finally {
                    setIsSubmitting(false);
                }
            }
        }
    }

    const handleSaveSlot = async () => {
        if (!selectedDate) {
            return;
        }
        setIsSubmitting(true);
        try {

            const res = await axios.post("/api/portal/update-physio-slot", {
                day: selectedDate,
                slot: selectedSlotList
            });
            setPhysioData(res?.data?.data);
            toast.success("Success...")
        } catch (error: any) {
            toast.error(error?.response?.data?.message ?? 'Something went wrong')
        } finally {
            handleReset();
        }
    }

    const userActionPermission = () => {
        try {
            if (user?.role === 'SALES') {
                return (
                    <div className='w-full flex flex-col items-center sm:flex-row gap-4 justify-between px-10 lg:px-20 py-2 border-t-2'>
                        <div className='flex items-center gap-2'>
                            <label htmlFor="physio" className='font-semibold'>Physio:- </label>

                            <select
                                id="physio" name='physio' className='border-2 rounded-sm border-black px-2 w-64'
                                value={selectedPhysio}
                                onChange={handleSelect}
                            >
                                <option value="">----</option>
                                {
                                    physioSelectList.map((physio, index) => {
                                        return (
                                            <option key={index} value={physio}>{physio}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        <Button
                            className="flex font-semibold text-lg w-36 px-2 h-12"
                            buttonType={selectedDate && selectedSlot && selectedPhysio ? "primary" : "secondary"}
                            handleClick={() => handleBook()}
                            type={"button"}
                        >
                            Book
                        </Button>
                    </div>

                )
            } else if (user?.role === "PHYSIO") {
                return (
                    <div className='w-full flex items-center sm:flex-row gap-4 justify-center lg:justify-end px-10 lg:px-20 py-2 border-t-2'>

                        <Button
                            className="flex font-semibold text-lg w-36 px-2 h-12"
                            buttonType={selectedDate ? "primary" : "secondary"}
                            handleClick={() => handleSaveSlot()}
                            isSubmitting={isSubmitting}
                            type={"button"}
                        >
                            Save Slot
                        </Button>
                    </div>
                )
            } else {
                return (
                    <div className='w-full flex justify-end px-10 ld:px-20 py-2 border-t-2'>
                        <span className='text-sm'>Contact Sales to book slot</span>
                    </div>
                )
            }
        } catch (error) {

        }
    }

    const handleDayChange = (dayObj: { day: string, label: string }) => {
        setSelectedDate(dayObj?.label);
        setSelectedSlotList([]);
        setSelectedSlot("");
        let parsePhysioData: string[] = [];
        if (physioData?.availableSlots) {
            parsePhysioData = JSON.parse(physioData?.availableSlots)[dayObj?.label]
        }
        setSelectedSlotList(parsePhysioData ?? []);
        if (user?.role !== "PHYSIO") {
            mapSlotData(physioList, dayObj?.label);
        }
    }

    return (
        <div className='w-full p-2 flex flex-col items-center gap-5'>
            <h1 className='text-4xl font-bold'>
                {user?.role === "PHYSIO" ? "Update Slot" : "Book Slot"}
            </h1>
            <div className='w-full flex flex-col lg:flex-row justify-between gap-10'>
                <div className='h-full border-2 rounded-sm p-2 lg:py-8 border-black lg:w-52 overflow-x-auto flex lg:flex-col gap-4 lg:gap-8 items-center lg:justify-center'>
                    {
                        DAYS.map((day, index) => {
                            return (
                                <Button
                                    key={index}
                                    className="flex font-semibold text-lg w-36 px-2 h-12"
                                    buttonType={selectedDate === day?.label ? "primary" : "secondary"}
                                    handleClick={() => {
                                        handleDayChange(day);
                                    }}
                                    type={"button"}
                                >
                                    {day?.day}
                                </Button>
                            )
                        })
                    }
                </div>
                <div className='w-full border-2 border-black rounded-sm flex flex-col items-center p-2 relative'>
                    <div className='absolute right-0 bottom-full p-2 flex items-center gap-2'>
                        <FaFilter />
                        <div className='flex items-center gap-1'>
                            {
                                FILTER?.map((day, index) => {
                                    return (
                                        <span
                                            key={index}
                                            className={`text-xs px-2 py-1 ${filter === day ? "border-blue-500 text-blue-500" : ""} border-2 rounded-md cursor-pointer font-medium`}
                                            onClick={() => handleFilter(index)}
                                        >
                                            {day}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='w-full h-[65vh] overflow-y-auto bg-gray-100 rounded-xl'>
                        <div className='w-full h-auto grid grid-cols-12 gap-5 py-5 px-2 lg:p-10 items-start'>
                            {
                                scheduleMap()
                            }
                        </div>
                    </div>

                    {
                        userActionPermission()
                    }
                </div>
            </div>

            {booking &&
                <Modal reset={handleReset}>
                    <div className='w-full flex flex-col items-center gap-6'>
                        <span className='text-xl px-6 font-medium'>Confirm Booking</span>


                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td className='p-1'>Slot:- </td>
                                    <td className='p-1'>{selectedDate.split('')[0].toUpperCase()}{selectedDate.slice(1)} {selectedSlot}</td>
                                </tr>
                                <tr>
                                    <td className='p-1'>Physio:- </td>
                                    <td className='p-1'>{selectedPhysio}</td>
                                </tr>
                                <tr>
                                    <td className='p-1'>Patient:- </td>
                                    <td className='p-1'>
                                        <select
                                            id="patient" name='patient' className={`border-2 rounded-sm ${error ? "border-red-500" : "border-black"} px-2 w-64`}
                                            value={selectedPatient}
                                            onChange={handleSelect}
                                        >
                                            <option value="">----</option>
                                            {
                                                userSelectList?.map((patient, index) => {
                                                    return (
                                                        <option key={index} value={patient.name}>{patient.name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='p-1'>Remarks:- </td>
                                    <td className='p-1'>
                                        <textarea className='border-2 border-black rounded-sm px-2 w-64'></textarea>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <form className='w-full flex gap-2'>
                            <Button
                                type='reset'
                                handleClick={handleReset}
                                isSubmitting={isSubmitting}
                                buttonType='secondary'

                                className='lg:flex font-semibold text-lg w-full h-10'
                            >
                                Cancel
                            </Button>
                            <Button
                                type='button'
                                handleClick={handleBookConfirm}
                                isSubmitting={isSubmitting}
                                buttonType='primary'
                                className='lg:flex font-semibold text-lg w-full h-10'
                            >
                                Book
                            </Button>
                        </form>
                    </div>
                </Modal>
            }
        </div>
    )
}

export default Portal