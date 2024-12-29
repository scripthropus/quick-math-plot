import { 
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer
} from 'recharts';

interface CreateChartProps {
    fn: (x: number)=>number;
    range: [start:number, end: number];
    step: number;
};


export const CreateChart = ({fn, range, step}: CreateChartProps) => {
    const data = [];
    const [start, end] = range;
    for(let x=start; x<=end; x+= step){
        data.push({
            x: x,
            y: fn(x)
        });
    }
    return(
    <ResponsiveContainer width="40%" aspect={1} style={{}}>
    <ScatterChart>
        <CartesianGrid/>
        <XAxis type="number" dataKey="x" name="x"/>
        <YAxis type="number" dataKey="y" name="y"/>
        <Scatter data={data} fill="blue"/>
    </ScatterChart>
    </ResponsiveContainer>
    );
}

