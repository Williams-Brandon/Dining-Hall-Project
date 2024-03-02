import DiningHallCard from "@components/DiningHallCards/DiningHallCard";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-1"> {/* Reduced top margin */}
        <div>
          <DiningHallCard image={1} name={'De La Guerra'} id={'dlg'} rating={3.5} />
        </div>
        <div>
          <DiningHallCard image={0} name={'Carillo'} id={'car'} rating={3.5} />
        </div>
        <div>
          <DiningHallCard image={2} name={'Ortega'} id={'ort'} rating={4.5} />
        </div>
        <div>
          <DiningHallCard image={3} name={'Portola'} id={'por'} rating={4} />
        </div>
      </div>
    </div>
  );
}
