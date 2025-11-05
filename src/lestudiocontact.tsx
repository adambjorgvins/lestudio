import { motion } from "framer-motion";
import styled from "styled-components";

const ContactSplit = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 70px;
  padding: 120px 8vw;
  align-items: center;
  background: #f8f8f8;

  @media (max-width: 768px) {
    padding: 70px 6vw;
    gap: 50px;
  }
`;

const TextBlock = styled(motion.div)`
  font-family: "IBM Plex Mono", monospace;
  color: #111;

  h2 {
    font-family: "Special Elite", serif;
    font-size: clamp(2rem, 4.5vw, 3rem);
    margin-bottom: 24px;
    color: #000;
    line-height: 1.3;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.15rem);
    color: #333;
    line-height: 1.8;
    max-width: 520px;
  }
`;

const FormWrapper = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 18px;
  max-width: 520px;
  background: white;
  padding: 40px;
  border-radius: 18px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.08);
  font-family: "IBM Plex Mono", monospace;

  label {
    font-size: 0.95rem;
    color: #000;
    letter-spacing: 0.3px;
  }

  input,
  textarea {
    font-family: "IBM Plex Mono", monospace;
    color: #000;
    padding: 14px 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    background: #fff;
    transition: border 0.2s ease, background 0.2s ease;

    &:focus {
      border-color: #000;
      background: #fafafa;
    }

    &::placeholder {
      color: #777;
    }
  }

  textarea {
    resize: vertical;
    min-height: 140px;
    line-height: 1.6;
  }

  button {
    margin-top: 20px;
    padding: 16px 0;
    font-family: "IBM Plex Mono", monospace;
    font-size: 1rem;
    font-weight: 500;
    border: none;
    border-radius: 8px;
    background: #000;
    color: white;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background: #333;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`;

export function LeStudioContactSection() {
  return (
    <ContactSplit id="contact">
      <TextBlock
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Send us a message</h2>
        <p>
          Whether you're looking for a space for photoshoots, recordings,
          workshops, or creative meetings — Le Studio offers a flexible and
          beautifully minimal environment. Send us a message and we’ll get back
          to you shortly.
        </p>
      </TextBlock>

      <FormWrapper
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thank you for your message! We'll get back to you soon ✉️");
        }}
      >
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name" required />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="e.g. name@email.com"
          required
        />

        <label htmlFor="subject">Subject</label>
        <input id="subject" type="text" placeholder="Subject" required />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Write your message here..."
          required
        />

        <button type="submit">Send message</button>
      </FormWrapper>
    </ContactSplit>
  );
}
