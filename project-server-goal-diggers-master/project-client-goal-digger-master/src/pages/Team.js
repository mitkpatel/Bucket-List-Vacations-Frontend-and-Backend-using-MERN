import ContactCards from "../components/ContactCards";
import useFetch from "react-fetch-hook";
import { Input } from "@material-ui/core";
import { useEffect, useState } from "react";

export default function Team() {
  const url = "https://randomuser.me/api/";
  const { data } = useFetch(url + "?results=20");
  const [contactList, setContactList] = useState();
  const [filterQuery, setFilterQuery] = useState();

  useEffect(() => {
    if (!filterQuery) {
      setContactList(data?.results?.slice(0, 10));
    } else {
      const queryString = filterQuery.toLowerCase();
      const filteredData = data?.results?.filter((contact) => {
        const fullName = `${contact.name.first} ${contact.name.last}`;

        // if it's just one letter, return all names that start with it
        if (queryString.length === 1) {
          const firstLetter = fullName.charAt(0).toLowerCase();
          return firstLetter === queryString;
        } else {
          return fullName.toLowerCase().includes(queryString);
        }
      });
      setContactList(filteredData);
    }
  }, [data, filterQuery]);

  return (
    <div className={"bg-gray-100"}>
      <section>
        <div className="flex items-center justify-center h-auto bg-gray-100">
          <div className="flex justify-center items-center mt-32 ">
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="Search by name"
              disableUnderline={true}
              onChange={(event) => setFilterQuery(event.target.value)}
              className="mt-2 md:w-96 w-48 rounded-md border border-black bg-white px-2 text-lg text-logincolor h-12"
            />
          </div>
        </div>
        {/* <form action="#" className="sm:mx-auto sm:max-w-lg sm:flex">
          <div className="min-w-0 flex-1">
            <div className="flex flex-col justify-center items-center mt-32 ">
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                disableUnderline={true}
                onChange={(event) => setFilterQuery(event.target.value)}
                className="mt-2 w-full rounded-md border border-black bg-white px-2 text-lg text-logincolor md:h-12"
              />
            </div>
          </div>
        </form> */}
      </section>
      <section className={"grid sm:grid-cols-2 md:grid-cols-4 gap-6 p-20"}>
        {contactList?.length < 1 && <h1>No data matches your search</h1>}
        <ContactCards contactList={contactList} />
      </section>
    </div>
  );
}
