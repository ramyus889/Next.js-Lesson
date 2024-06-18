type Car = {
  id: number;
  title: string;
  price: number;
};

export default async function About() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch("https://540551bc2c03d6ee.mokky.dev/frontend");
  const cars = await response.json();
  return (
    <div className="me-20 ms-20 mt-20 grid grid-cols-2 gap-2 p-4">
      {cars.map((car: Car) => (
        <div
          key={car.id}
          className="flex items-center justify-between rounded-lg bg-slate-700 p-4"
        >
          <div className="flex flex-col space-y-1">
            <div className="text-lg font-semibold">{car.title}</div>
            <div className="text-sm">{car.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
