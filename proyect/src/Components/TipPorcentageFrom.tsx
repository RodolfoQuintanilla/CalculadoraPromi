import { TipPorcentageFromProps } from "../Types";

const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]


const TipPorcentageFrom = ({ tip, setTip }: TipPorcentageFromProps) => {

    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>

            <form>
                {tipOptions.map(tipOption => (
                    <div key={tipOption.id}>
                        <label htmlFor="">{tipOption.label}</label>
                        <input type="radio"
                            id={tipOption.id}
                            name="tip"
                            value={tipOption.value}
                            onChange={e => setTip(+e.target.value)}
                            checked={tipOption.value === tip}
                        />
                    </div>
                ))}
            </form>
        </div>
    );
};

export default TipPorcentageFrom;