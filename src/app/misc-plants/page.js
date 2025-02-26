import PlantCard from "@/components/PlantCard"

export const metadata = {
  title: "Topiary - Shapes - StarBlue Plantation",
  description: "Learn more about StarBlue Plantation.",
};

const MiscPlants = () => {
  return (
    <>
    <section
      className="relative bg-cover bg-center py-40 text-white text-center"
      style={{ backgroundImage: "url('/palms.jpg')" }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Heading with More Space */}
      <div className="relative z-10 pb-16">
        <h1 className="text-5xl font-bold">Misc-Plants</h1>
      </div>
   
    </section>

    <PlantCard
        title="Adenium obesum"
        description="Variable, perennial succulent with a thick, usually bottle-shaped, twisted, greyish brown caudex, often more than 1m long and tapering to a many-branched tip. Upright, succulent brown branches produce ovate, grey-green leaves, to 10cm long. Red, pink, or white flowers, to 4-6cm across, are borne in small terminal corymbs throughout summer,"
        image="/adenium.PNG"
      />
</>
  )
}

export default MiscPlants