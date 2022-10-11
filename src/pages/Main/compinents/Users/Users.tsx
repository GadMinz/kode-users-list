import React from "react";
import { UserItem } from "../../../../redux/types";
import s from "./Users.module.scss";
import UsersItem from "./UsersItem";

interface UsersProps {}

const items: UserItem[] = [
  {
    id: "c486d31d-3a3f-4464-9099-a098bf2c70f7",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/183.jpg",
    firstName: "Cade",
    lastName: "Kihn",
    userTag: "BT",
    department: "backend",
    position: "Designer",
    birthday: "2005-12-27",
    phone: "528-291-7506",
  },
  {
    id: "2af0ea5b-3c8a-41a5-99fe-c1368cc72dd4",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1210.jpg",
    firstName: "Mariso",
    lastName: "Predovic",
    userTag: "AI",
    department: "qa",
    position: "Officer",
    birthday: "1975-12-22",
    phone: "666-625-5638",
  },
  {
    id: "11d90f4e-c7c2-4333-83cf-bb388aea2a37",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/958.jpg",
    firstName: "France",
    lastName: "Beatty",
    userTag: "BL",
    department: "qa",
    position: "Architect",
    birthday: "1959-05-28",
    phone: "489-815-2027",
  },
  {
    id: "7cc72731-d38c-49e2-b810-6abd241b231d",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/3.jpg",
    firstName: "Dolore",
    lastName: "Kozey",
    userTag: "CR",
    department: "back_office",
    position: "Director",
    birthday: "1948-02-01",
    phone: "560-517-6875",
  },
  {
    id: "97fa8870-ece9-4e24-98e4-d2ba3fedce1c",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/984.jpg",
    firstName: "Daniel",
    lastName: "Keebler",
    userTag: "TC",
    department: "design",
    position: "Strategist",
    birthday: "2016-03-19",
    phone: "520-894-9288",
  },
  {
    id: "94388f22-4470-40b2-bd72-d15b050925b2",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/416.jpg",
    firstName: "Reyes",
    lastName: "Lynch",
    userTag: "NR",
    department: "qa",
    position: "Coordinator",
    birthday: "1985-10-03",
    phone: "604-835-2273",
  },
  {
    id: "8f7f2571-2023-4320-a42f-763c99ae4b21",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/177.jpg",
    firstName: "Arnulf",
    lastName: "Wintheiser",
    userTag: "PK",
    department: "analytics",
    position: "Agent",
    birthday: "2002-02-08",
    phone: "775-840-5018",
  },
  {
    id: "a13b02d0-cd7c-4329-878d-81a37cb85256",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1042.jpg",
    firstName: "Coy",
    lastName: "Kerluke",
    userTag: "AZ",
    department: "pr",
    position: "Developer",
    birthday: "2007-06-29",
    phone: "454-394-2582",
  },
  {
    id: "711d7d5a-3d23-4be8-a10c-442793ec5809",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/713.jpg",
    firstName: "Melyna",
    lastName: "Thompson",
    userTag: "RO",
    department: "analytics",
    position: "Designer",
    birthday: "1944-06-19",
    phone: "637-290-3547",
  },
  {
    id: "fd8bd023-0d09-45bc-8c25-a25ffd6c57a0",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/43.jpg",
    firstName: "Earlen",
    lastName: "Rosenbaum",
    userTag: "TC",
    department: "android",
    position: "Liaison",
    birthday: "1990-06-25",
    phone: "447-753-4641",
  },
  {
    id: "ce821514-62af-4102-af66-0485c6b45df5",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/807.jpg",
    firstName: "Leone",
    lastName: "Borer",
    userTag: "PG",
    department: "design",
    position: "Analyst",
    birthday: "1965-01-12",
    phone: "404-508-8102",
  },
  {
    id: "c565e87f-ffed-46fd-a3c8-3f40fa181089",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/39.jpg",
    firstName: "Colten",
    lastName: "Flatley",
    userTag: "LY",
    department: "android",
    position: "Coordinator",
    birthday: "1942-11-16",
    phone: "286-296-4734",
  },
  {
    id: "fb2fbc7c-d4f4-4b06-b5dc-14fdb6a9a4d6",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/836.jpg",
    firstName: "Samir",
    lastName: "Reilly",
    userTag: "PE",
    department: "pr",
    position: "Architect",
    birthday: "2006-11-21",
    phone: "750-726-3307",
  },
  {
    id: "af1fb0e5-1f64-4f40-83dd-4639ba7351b5",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/605.jpg",
    firstName: "Willis",
    lastName: "Gerhold",
    userTag: "PH",
    department: "pr",
    position: "Representative",
    birthday: "1960-05-29",
    phone: "728-366-9685",
  },
  {
    id: "eb2a478a-1fac-44bd-babc-997b5c9ddc31",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/475.jpg",
    firstName: "Florin",
    lastName: "Corkery",
    userTag: "MT",
    department: "frontend",
    position: "Specialist",
    birthday: "2004-08-10",
    phone: "609-854-7965",
  },
  {
    id: "e8985e78-fccb-4236-8754-696e733da50c",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/390.jpg",
    firstName: "Maybel",
    lastName: "Weimann",
    userTag: "LK",
    department: "android",
    position: "Coordinator",
    birthday: "1967-08-10",
    phone: "850-782-7247",
  },
  {
    id: "577c8c08-9c64-4729-93c2-b02c17da33b8",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1115.jpg",
    firstName: "Mariam",
    lastName: "Ledner",
    userTag: "RW",
    department: "frontend",
    position: "Associate",
    birthday: "2021-02-22",
    phone: "900-504-2742",
  },
  {
    id: "812200ba-b292-4330-afa6-921d03253da6",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/973.jpg",
    firstName: "Grayso",
    lastName: "Collier",
    userTag: "MK",
    department: "android",
    position: "Architect",
    birthday: "1978-04-21",
    phone: "309-772-9044",
  },
  {
    id: "24c8bac3-e33a-4186-a835-2c53bd10a48d",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/852.jpg",
    firstName: "Franco",
    lastName: "Spinka",
    userTag: "AI",
    department: "android",
    position: "Strategist",
    birthday: "1975-08-08",
    phone: "929-305-5797",
  },
  {
    id: "1a37f8ff-d390-4454-8d30-2ccfe993e0c3",
    avatarUrl:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/463.jpg",
    firstName: "Jayce",
    lastName: "Conroy",
    userTag: "NI",
    department: "support",
    position: "Consultant",
    birthday: "1988-01-06",
    phone: "992-211-9366",
  },
];

const Users: React.FC<UsersProps> = () => {
  return (
    <div className={s.users}>
      {items.map((item: UserItem) => (
        <UsersItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Users;
