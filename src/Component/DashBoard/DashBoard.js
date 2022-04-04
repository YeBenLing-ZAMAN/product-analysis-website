import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart, Tooltip, Area, ComposedChart, Legend, Bar, PieChart, Pie } from 'recharts';
const DashBoard = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])
    return (
        <div className='px-20 pt-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-20 h-[90vh]'>
                <div className='flex justify-center items-center'>
                    <LineChart width={600} height={300} data={datas} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                    </LineChart></div>
                <div className='flex justify-center items-center'>
                    <AreaChart width={730} height={250} data={datas}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="investment" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                    </AreaChart>
                </div>
                <div className='flex justify-center items-center'>
                    <ComposedChart width={730} height={250} data={datas}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                        <Bar type="monotone" dataKey="sell" barSize={20} stroke="#ff7300" />
                    </ComposedChart> </div>
                <div>
                    <PieChart width={730} height={250}>
                        <Pie data={datas} dataKey="investment" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#f74f68" />
                        <Pie data={datas} dataKey="sell" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#2438f0" label />
                    </PieChart></div>
            </div>
        </div>
    );
};

export default DashBoard;