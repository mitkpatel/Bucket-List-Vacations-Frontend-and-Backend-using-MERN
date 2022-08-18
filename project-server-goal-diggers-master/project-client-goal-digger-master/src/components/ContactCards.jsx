const ContactCards = ({ contactList }) => {
    return (
      <>
        {contactList?.map((contact, index) => (
          <figure className="bg-white text-white h-full rounded-lg shadow-md" key={index}>
            <img alt="user" className="w-32 h-32 rounded-full mx-auto mt-7" src={contact.picture.large} />
            <figcaption className="text-center mt-5">
              <p className="text-gray-700 font-semibold text-xl mb-2">
                {contact.name.first} {contact.name.last}
              </p>
              <p className="text-gray-500">
                <span className="font-medium">email: </span>{contact.email}
              </p>
              <p className="text-gray-500">
                <span className="font-medium">phone: </span>{contact.cell}
              </p>
              <p className="text-gray-500">
                <span className="font-medium">city: </span>{contact.location.city}
              </p>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                  <a
                    href={"/team"}
                    target="__blank"
                    className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                  >
                    Contact  {contact.name.first}  <span aria-hidden="true"></span>
                  </a>
                </div>
            </figcaption>
          </figure>
        ))}
      </>
    )
  }
  
  export default ContactCards