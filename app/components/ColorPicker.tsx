'use client'
import { useEffect, useState } from "react";

export default function ColorPicker({ myprops }: any) {
    const [color, setColor] = useState()

    const a = (myprops: any) => {
        switch (myprops) {
            case "red":
                return "bg-red-500"
            case "blue":
                return "bg-blue-500"
            default:
                return "bg-green-500"
        }
    }
    useEffect(() => {
        const aa: any = a(myprops)
        setColor(aa)
        console.log(aa)
    }, [])


    return (
        <div className={`w-full h-[100vh] ${color}`}>
            <h1>MasBal</h1>
        </div>
    )
}