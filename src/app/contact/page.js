import ContactForm from "@/components/ContactForm"
import ContactUsBanner from "@/components/ContactUsBanner"

export const metadata = {
  title: "Contact Us - StarBlue Plantation",
  description: "Learn more about StarBlue Plantation.",
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