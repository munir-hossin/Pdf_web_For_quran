import React, { useState, useRef, useEffect } from "react";

function Book() {
  const [activeItem, setActiveItem] = useState(1); // State to track the active item
  const [inputValue, setInputValue] = useState(""); // State to store input value
  const containerRef = useRef(null);

  const items = [
    {
      id: 1,
      content: (
        <div className="flex justify-center items-center h-full">
          <p className="text-white text-3xl">Item 1: Nulla eaque quam?</p>
          <img src="https://via.placeholder.com/300" alt="Placeholder 1" className="ml-4" />
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex justify-center items-center h-full">
          <p className="text-white text-3xl">Item 2: Lorem ipsum dolor sit.</p>
          <img src="https://via.placeholder.com/300" alt="Placeholder 2" className="ml-4" />
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex justify-center items-center h-full">
          <p className="text-white text-3xl">Item 3: Consectetur adipisicing elit.</p>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex justify-center items-center h-full">
          <p className="text-white text-3xl">Item 4: Lorem ipsum dolor sit.</p>
          <img src="https://via.placeholder.com/300" alt="Placeholder 4" className="ml-4" />
        </div>
      ),
    },
    {
        id: 5,
        content: (
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-3xl">Item 5: Nulla eaque quam?</p>
          </div>
        ),
      },
      {
        id: 7,
        content: (
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-3xl">Item 5: Nulla eaque quam?</p>
          </div>
        ),
      },
  ];

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft;
      const itemWidth = containerRef.current.offsetWidth;
      const currentIndex = Math.round(scrollLeft / itemWidth);
      setActiveItem(items[currentIndex]?.id);
    }
  };

  // Function to scroll to a specific item based on the active item state
  const scrollToItem = (index) => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  };

  // Handle searching by ID and move to that item
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value && parseInt(value) >= 1 && parseInt(value) <= 500) {
      const itemIndex = items.findIndex((item) => item.id === parseInt(value));
      scrollToItem(itemIndex);
    }
  };

  // Scroll to the current active item when the active item state changes
  useEffect(() => {
    const currentIndex = items.findIndex((item) => item.id === activeItem);
    scrollToItem(currentIndex);
  }, [activeItem]);

  return (
    <div className="relative h-screen w-screen bg-gray-900">
      {/* Search Input */}
      <div className="absolute top-4 left-4 z-10">
        <input
          type="text"
          placeholder="Enter ID (1-5)"
          value={inputValue}
          onChange={handleInputChange}
          className="p-2 border rounded"
        />
      </div>

      {/* Scrollable container */}
      <div
        ref={containerRef}
        className="flex overflow-x-scroll snap-x snap-mandatory h-full w-full"
        onScroll={handleScroll}
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="snap-center flex-none w-full min-w-full h-full flex flex-col items-center justify-center border p-4"
            style={{ height: "100vh", width: "100vw" }}
          >
            <h1 className="text-4xl text-white">{item.id}</h1>
            {item.content}
          </div>
        ))}
      </div>

      {/* Show active item ID */}
      <div className="absolute bottom-4 left-4 z-10 text-white">
        <p>Active Item: {activeItem}</p>
      </div>
    </div>
  );
}

export default Book;










// //###################### this is complete with p and a tag and img tag from top to bottom ############################
// import { useState } from "react";

// function Book() {
//   const [inputValue, setInputValue] = useState(""); // State to store input value
//   const [items, setItems] = useState([
   
     
    

//     {
//       id: 1,
//       content: (
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
//             lacinia odio vitae vestibulum vestibulum.
//           </p>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       content: (
//         <div>
//           <p>
//             Consectetur adipisicing elit. Quo labore officiis sequi sapiente.
//           </p>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       content: (
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Autem
//             labore.
//           </p>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//         </div>
//       ),
//     },
//     {
//       id: 4,
//       content: (
//         <div>
//           <p>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Autem, quo?
//           </p>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//         </div>
//       ),
//     },
//     {
//         id: 5,
//         content: (
//           <div>
//             <p>
//               Nulla eaque quam? Lorem ipsum dolor sit amet consectetur adipisicing
//               elit. Autem, quo?
//             </p>
//             <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//           </div>
//         ),
//       },
//   ]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     if (value && parseInt(value) >= 1 && parseInt(value) <= 5) {
//       // Move the item with the corresponding ID to the first position
//       const newItems = [...items];
//       const itemIndex = newItems.findIndex((item) => item.id === parseInt(value));
//       if (itemIndex !== -1) {
//         const selectedItem = newItems.splice(itemIndex, 1)[0];
//         newItems.unshift(selectedItem);
//         setItems(newItems);
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Input field */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter ID (1-5)"
//           value={inputValue}
//           onChange={handleInputChange}
//           className="border p-2 mt-4"
//         />
//       </div>

//       {/* Items are always visible but reordered */}
//       <div className="mt-6">
//         {items.map((item) => (
//           <div key={item.id} id={item.id} className="mb-4">
//             <h1>{item.id}</h1>
//             {item.content}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Book;


































// // ********************************** !good complete just scroll ******************************
// import React, { useState, useRef } from "react";
// import { useEffect } from "react";

// function Book() {
//   const [activeItem, setActiveItem] = useState(1); // State to track the active item
//   const containerRef = useRef(null);

//   const items = [
//     {
//       id: 1,
//       content: (
//         <div className=" ">
//           <p>
//            dfdasfassssssssssssss
//           </p>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//         </div>
//       ),
//     },
//     {
//       id: 2,
//       content: (
//         <div className="min-w-full h-64 p-4">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur iste in dolor officiis maxime vitae assumenda deserunt porro, voluptatibus eveniet possimus iure libero necessitatibus quia soluta eius consequuntur pariatur ipsam! Dolorem dolorum reprehenderit sed ipsum laudantium laborum iste, unde incidunt est autem molestiae! Tempore culpa quam enim minima nemo iusto voluptatum illo consectetur neque quos fugiat sapiente tempora iste quod placeat, porro dolorem numquam temporibus commodi incidunt quasi. Recusandae corrupti quaerat id dolore facilis,
//             lacinia odio vitae vestibulum vestibulum.
//           </p>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//         </div>
//       ),
//     },
//     {
//       id: 3,
//       content: (
//         <div className="min-w-full h-64 p-4">
//           <p>
//             Consectetur adipisicing elit. Quo labore officiis sequi sapiente. 
//           </p>
//         </div>
//       ),
//     },
//     {
//       id: 4,
//       content: (
//         <div>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Autem
//             labore.
//           </p>
//           <img
//             src="https://via.placeholder.com/150"
//             alt="Placeholder"
//             className="mt-2"
//           />
//         </div>
//       ),
//     },
//     {
//       id: 5,
//       content: (
//         <div>
//           <p>
//             Nulla eaque quam? Lorem ipsum dolor sit amet consectetur adipisicing
//             elit. Autem, quo?
//           </p>
//         </div>
//       ),
//     },
//   ];

//   // Handle scroll detection to update the active item based on scroll position
//   const handleScroll = () => {
//     if (containerRef.current) {
//       const scrollLeft = containerRef.current.scrollLeft;
//       const itemWidth = containerRef.current.offsetWidth;
//       const currentIndex = Math.round(scrollLeft / itemWidth);
//       setActiveItem(items[currentIndex]?.id);
//     }
//   };

//   // Function to scroll to a specific item based on the active item state
//   const scrollToItem = (index) => {
//     if (containerRef.current) {
//       const itemWidth = containerRef.current.offsetWidth;
//       containerRef.current.scrollTo({
//         left: index * itemWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   // Scroll to the current active item when the active item state changes
//   useEffect(() => {
//     const currentIndex = items.findIndex((item) => item.id === activeItem);
//     scrollToItem(currentIndex);
//   }, [activeItem]);

//   return (
//     <div>
//       {/* Scrollable container */}
//       <div
//         ref={containerRef}
//         className="flex overflow-x-scroll snap-x snap-mandatory"
//         onScroll={handleScroll}
//         style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
//       >
//         {items.map((item) => (
//           <div
//             key={item.id}
//             id={item.id}
//             className="snap-center flex-none w-full min-w-full h-64 flex flex-col items-center justify-center border p-4"
//           >
//             <h1>{item.id}</h1>
//             {item.content}
//           </div>
//         ))}
//       </div>

//       {/* Show active item id */}
//       <div className="mt-4 text-center">
//         <p>Active Item: {activeItem}</p>
//       </div>
//     </div>
//   );
// }

// export default Book;











































// ****************** this is a complete work also *******************************
// import { useState } from "react";

// function PaseItems() {
//   const [inputValue, setInputValue] = useState(""); // State to store input value
//   const [items, setItems] = useState([
//     { id: 1, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur " },
//     { id: 2, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ?" },
//     { id: 3, content: "Consectetur adipisicing elit. Autem,Autem, quo       quo?" },
//     { id: 4, content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
//     { id: 5, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//     { id: 6, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//     { id: 7, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//     { id: 8, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//     { id: 9, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//     { id: 10, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//     { id: 11, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//     { id: 12, content: "Nulla eaque quam? Lorem ipsum dolor sit amet consectetur." },
//   ]);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInputValue(value);

//     if (value && parseInt(value) >= 1 && parseInt(value) <= 10) {
//       // Move the item with the corresponding ID to the first position
//       const newItems = [...items];
//       const itemIndex = newItems.findIndex((item) => item.id === parseInt(value));
//       if (itemIndex !== -1) {
//         const selectedItem = newItems.splice(itemIndex, 1)[0];
//         newItems.unshift(selectedItem);
//         setItems(newItems);
//       }
//     }
//   };

//   return (
//     <div>
//       {/* Input field */}
//       <div>
//         <input
//           type="text"
//           placeholder="Enter ID (1-5)"
//           value={inputValue}
//           onChange={handleInputChange}
//           className="border p-2 mt-4"
//         />
//       </div>

//       {/* Items are always visible but reordered */}
//       <div className="mt-6">
//         {items.map((item) => (
//           <div key={item.id} id={item.id} className="mb-4">
//             <h1>{item.id}</h1>
//             <p>{item.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PaseItems;




