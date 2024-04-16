export default function Header() {

  const day = new Date();

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let todayDay = weekday[day.getDay()]
  let todayDate = day.getDate()
  let todayMonth = month[day.getMonth()]

  return (
    <>
      <div className='flex flex-row justify-between items-end'> 
      <div>
        <h1 className="text-2xl mb-2 sm:text-5xl font-bold">Hey there!</h1>
        <p className="text-lg mb-2 sm:text-2xl"> What&apos;s your plan for today?</p>
      </div>
      <div className="text-right">
        <h1 className="text-xl sm:text-2xl font-bold">{todayDay}</h1>
        <p className="text-lg mb-2 sm:text-xl"> {todayDate} {todayMonth}</p>
      </div>
      </div>
    </>
  )
}