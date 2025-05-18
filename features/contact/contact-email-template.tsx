type ContactUsEmailProps = {
  message: string;
  name: string;
  phone: string;
  email: string;
};
export const ContactUsEmail = ({
  message,
  name,
  phone,
  email,
}: ContactUsEmailProps) => {
  return (
    <div>
      <p>{message}</p>

      <div>
        <p>From:</p>
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};
