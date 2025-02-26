"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { plantData } from "../plantData";



export default function PlantDetails() {
  const { id } = useParams(); // Get the dynamic ID from the route
  const plant = plantData[id];

  if (!plant) {
    return (
      <div className="text-center text-gray-600 p-10 text-sm">
        Plant not found
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
      <div className="col-span-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 shadow-lg p-6 rounded-lg">
          <div className="col-span-2">
            <Image
              src={plant.image}
              alt={plant.name}
              width={500}
              height={500}
             className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="shadow-lg p-3 rounded-lg bg-white">
            <h1 className="text-lg font-bold text-green-700 shadow-sm p-1 rounded">
              {plant.name}
            </h1>
            <p className="mt-1 shadow-sm p-1 rounded">
             <strong> Family</strong>: {plant.family}
            </p>
            <p className="mt-1 text-gray-800 shadow-sm p-1 rounded">
            <strong> Uses</strong>: {plant.uses}
            </p>
            <p className="mt-1 shadow-sm p-1 rounded">
              <strong>Size:</strong>{plant.size}
            </p>
            <p className="mt-1 shadow-sm p-1 rounded">
              <strong>Location:</strong> {plant.location}
            </p>
            <p className="mt-1 shadow-sm p-1 rounded">
              <strong>Soil:</strong> {plant.soil}
            </p>
            <p className="mt-1 shadow-sm p-1 rounded">
              <strong>Fertiliser:</strong> {plant.Fertiliser}
            </p>
            <p className="mt-1 shadow-sm p-1 rounded">
              <strong>Water:</strong> {plant.water}
            </p>
            <p className="mt-1 shadow-sm p-1 rounded">
              <strong>Plant No.:</strong> {plant.plantNo}
            </p>
            <p className="mt-1 shadow-sm p-1 rounded">
              <strong>Category:</strong> {plant.category}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <h2 className="text-lg font-semibold text-green-700 border-b pb-2 mb-4 shadow-sm p-2 rounded">
          Related Plants
        </h2>
        <div className="grid grid-cols-2 gap-4">
  {plant.relatedPlants.map((related, index) => (
    <div
      key={index}
      className="border rounded-md p-2 shadow-sm hover:shadow-md transition flex flex-col items-center bg-white w-50"
    >
      <Image
        src={related.image}
        alt={related.name}
        width={80}
        height={80}
        className="rounded-md transition-transform duration-300 hover:scale-105"
      />
      <h3 className="text-xs mt-2 font-semibold text-gray-700 text-center shadow-sm p-1 rounded">
        {related.name}
      </h3>
      <Link
        href={related.link}
        className="block mt-2 bg-green-600 text-white text-center py-1 px-3 text-xs rounded-lg hover:bg-green-700 transition shadow-md"
      >
        Read more
      </Link>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
