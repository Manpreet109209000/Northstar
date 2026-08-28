import Button from "../Button";

type ContactCardProps = {
  title: string;
  value: string;
  description: string;
  link: string;
};

export default function ContactCard({
  title,
  value,
  description,
  link,
}: ContactCardProps) {
  return (
    <article className="contact-card">
      {/* TOP */}
      <div className="contact-card-top">
        <p className="contact-card-label">
          {title}
        </p>

        {/* VALUE */}
        <div className="contact-value">
          {value}
        </div>

        {/* BUTTON */}
        {link !== "#" && (
          <div className="contact-button-wrapper">
            <Button
              href={link}
              target="_blank"
              variant={
                title === "Email"
                  ? "secondary"
                  : "primary"
              }
            >
              {title === "Email"
                ? "Send Email"
                : "Open"}

            </Button>
          </div>
        )}
      </div>

      {/* DESCRIPTION */}
      <p className="contact-card-description">
        {description}
      </p>
    </article>
  );
}