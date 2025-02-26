import PlantCard from "@/components/PlantCard"

export const metadata = {
  title: "Palms - StarBlue Plantation",
  description: "Learn more about StarBlue Plantation.",
};

const Palms = () => {
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
        <h1 className="text-5xl font-bold">Palms</h1>
      </div>
   
    </section>

    <PlantCard
        title="Archontophoenix Alexandrae"
        description="Tall palm with slim, ringed trunk. Leaves are 6 to 12 feet long, pinnate, arching, and made up of many leaflets in light to grayish green. Pendent racemes of lilac flowers bloom in summer followed by round red fruit. Usually found in rainforest areas of Australia. In temperate climates these..."
        image="/archontophoenix.PNG"
      />
</>
  )
}

export default Palms