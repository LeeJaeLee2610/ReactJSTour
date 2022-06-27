import React, { useEffect, useState } from 'react';

const Timer = () => {
    const [mes, setMes] = useState('Em Cuong')
    useEffect(() => {
        const timer = setInterval(() => {
            console.log(mes)
        }, 2000);
        return () => {
            clearInterval(timer)
        }
    }, [mes])
    return (
        <div>
            <input type="text" value={mes} onChange={(e) => setMes(e.target.value)}/>
        </div>
    );
};

export default Timer;