interface Props {
  title: string
  value: number
}

const PowerStat = ({ title, value }: Props) => {
  return (
    <div>
      <span className="font-bebas text-lg">{`${title} ${value}`}</span>
      <div className="w-full bg-darkgray rounded-full">
        <div
          className="rounded-full h-4 bg-orange text-light"
          style={{ width: value + '%' }}
        ></div>
      </div>
    </div>
  )
}

export default PowerStat
