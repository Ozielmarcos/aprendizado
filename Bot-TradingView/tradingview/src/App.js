import { useState, useEffect } from 'react';
import './App.css';
import Chart from './Chart';
import { getCandles } from './DataService.js';
import Candle from './Candle';
import { useWebsocket } from 'react-use-websockets';

function App() {

  const [symbol, setSymbol] = useState("BTCUSDT");

  const [interval, setInterval] = useState("1m");

  const [data, setData] = useState([]);

  useEffect(() => {
    getCandles(symbol, interval)
      .then(data => setData(data))
      .catch(err => alert(err.response ? err.response.data : err.message))
  }, [symbol, interval])

  function onSymbolChange(event) {
    setSymbol(event.target.value);
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
  }

  const { lastJsonMessage } = useWebsocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`, {
    onOpen: () => console.log(`Conneceted to App WS`),
    onMessage: () => {
      if (lastJsonMessage) {
        const newCandle = new Candle(lastJsonMessage.k.t, lastJsonMessage.k.o, lastJsonMessage.k.h, lastJsonMessage.k.l, lastJsonMessage.k.c);
        const newData = [...data];
        if (lastJsonMessage.k.x === false) {
          newData[newData.length - 1] = newCandle;
        }
        else {
          newData.splice(0, 1);
          newData.push(newCandle);
        }
        setData(newData);
      }
    },
    onError: (event) => console.error(event),
    shouldReconnect: (CloseEvent) => true,
    reconnectInterval: 3000
  });

  return (
    <>
      <select onChange={onSymbolChange} value={symbol}>
        <option>BTCUSDT</option>
        <option>ETHUSDT</option>
        <option>ADAUSDT</option>
      </select>

      <select onChange={onIntervalChange} value={interval}>
        <option>1m</option>
        <option>5m</option>
        <option>15m</option>
        <option>1h</option>
      </select>
      <Chart data={data} />
    </>
  );
}

export default App;
