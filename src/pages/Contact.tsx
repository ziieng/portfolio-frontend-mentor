const Contact = () => (
  <div>
    <h1>Get in Touch</h1>
    <p>I’d love to hear about what you’re working on and how I could help. I’m currently 
    looking for a new role and am open to a wide range of opportunities. My preference 
    would be to find a position in a company in London. But I’m also happy to hear about 
    opportunites that don’t fit that description. I’m a hard-working and positive person 
    who will always approach each task with a sense of purpose and attention to detail. 
    Please do feel free to check out my online profiles below and get in touch using the form.</p>

    <h2>Contact Me</h2>
    <form>
      <label>Name</label>
      <input type="text" placeholder="Jane Appleseed" />
      <br />
      <label>Email Address</label>
      <input type="email" placeholder="email@example.com" />
      <br />
      <label>Message</label>
      <textarea placeholder="How can I help?" />
      <br />
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default Contact;
