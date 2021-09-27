import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

 export default function Chart({title1, title2, data}) {
    return (
        <div className="chart">
            <h3 className="title1">Virtual Machines</h3>
            <ResponsiveContainer width="100%" aspect= {6 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="teal" />
                    <Line type="natural" dataKey="Active VMs" stroke ="green" />
                    <Line type="natural" dataKey="Inactive VMs" stroke ="red" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
    
            <h3 className="chartTitle">Networks</h3>
            <ResponsiveContainer width="100%" aspect= {6 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="teal" />
                    <Line type="natural" dataKey="Active Network" stroke ="green" />
                    <Line type="natural" dataKey="Inactive Network" stroke ="red" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

