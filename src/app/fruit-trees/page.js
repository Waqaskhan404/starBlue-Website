import PlantCard from "@/components/PlantCard"

export const metadata = {
  title: "Fruit Trees - StarBlue Plantation",
  description: "Learn more about StarBlue Plantation.",
};

const FruitTree = () => {
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
        <h1 className="text-5xl font-bold">Fruit Trees</h1>
      </div>
   
    </section>

    <PlantCard
        title="Carica papaya"
        description="The papaya plant has an erect branchless trunk 6-20 ft (1.8-6.1 m) tall, and a palmlike head of foliage at the top. The trunk remains somewhat succulent and soft wooded, and never develops true bark. It is ringed with prominent scars from previous leaf stems and contains an acrid milky"
        image="/fruite-tree.jpg"
      />
</>
  )
}

export default FruitTree