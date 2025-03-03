import ContactForm from "@/components/ContactForm"
import ContactUsBanner from "@/components/ContactUsBanner"

export const metadata = {
  title: "Contact Us - StarBloom Plantation",
  description: "Learn more about StarBloom Plantation.",
};

const Contact = () => {
  return (
    <>
    <ContactUsBanner/>
    <ContactForm/>
    </>
  )
}

export default Contact