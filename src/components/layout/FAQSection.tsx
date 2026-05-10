import Button from "../ui/Button";

const FAQSection = () => {
  return (
    <>
      <h2>Frequently Asked Questions About Our Services</h2>
      <p>
        Find answers to common queries regarding renovation and plumbing
        services we offer.
      </p>
      <Button title="See All Faq" />
      <ul>
        <li>How do I know if I need plumbing repairs?</li>
        <li>Are your services available for emergency plumbing needs?</li>
        <li>What types of renovation services do you offer?</li>
        <li>Do you offer free estimates for renovation projects?</li>
        <li>Are your services covered by a warranty?</li>
        <li>How long does a renovation project typically take?</li>
      </ul>
    </>
  );
};

export default FAQSection;
