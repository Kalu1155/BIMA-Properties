"use client";

import { useState } from "react";
import { LuX,LuUpload  } from "react-icons/lu";


export default function AddPropertyModal({
  open,
  setOpen,
}) {

  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    status: "Active",
    description: "",
    amenities: "",
  });

  // HANDLE INPUTS
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE IMAGE PREVIEW
  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    const previewImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages(previewImages);
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(form);
    console.log(images);

    // API integration later
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto">

      <div className="min-h-screen flex items-start justify-center p-4">

        <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="flex items-center justify-between border-b p-6 sticky top-0 bg-white z-10">

            <div>
              <h2 className="text-2xl font-bold">
                Add New Property
              </h2>

              <p className="text-gray-500 mt-1">
                Fill property details below
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
            >
              <LuX />
            </button>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6"
          >

            {/* LEFT SIDE */}
            <div className="space-y-5">

              {/* TITLE */}
              <div>
                <label className="font-medium">
                  Property Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Luxury Duplex"
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                />
              </div>

              {/* PRICE */}
              <div>
                <label className="font-medium">
                  Price
                </label>

                <input
                  type="text"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="₦500,000,000"
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                />
              </div>

              {/* LOCATION */}
              <div>
                <label className="font-medium">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  placeholder="Abuja"
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                />
              </div>

              {/* PROPERTY TYPE */}
              <div>
                <label className="font-medium">
                  Property Type
                </label>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                >
                  <option value="">Select Type</option>
                  <option>Duplex</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Office</option>
                  <option>Land</option>
                </select>
              </div>

              {/* BED + BATH */}
              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="font-medium">
                    Bedrooms
                  </label>

                  <input
                    type="number"
                    name="bedrooms"
                    value={form.bedrooms}
                    onChange={handleChange}
                    className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="font-medium">
                    Bathrooms
                  </label>

                  <input
                    type="number"
                    name="bathrooms"
                    value={form.bathrooms}
                    onChange={handleChange}
                    className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                  />
                </div>

              </div>

              {/* STATUS */}
              <div>
                <label className="font-medium">
                  Status
                </label>

                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                >
                  <option>Active</option>
                  <option>Pending</option>
                  <option>Sold</option>
                </select>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-5">

              {/* DESCRIPTION */}
              <div>
                <label className="font-medium">
                  Description
                </label>

                <textarea
                  rows="6"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  placeholder="Write property description..."
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black resize-none"
                />
              </div>

              {/* AMENITIES */}
              <div>
                <label className="font-medium">
                  Amenities
                </label>

                <input
                  type="text"
                  name="amenities"
                  value={form.amenities}
                  onChange={handleChange}
                  placeholder="Pool, Parking, Gym..."
                  className="w-full mt-2 border rounded-xl p-4 outline-none focus:border-black"
                />
              </div>

              {/* IMAGE UPLOAD */}
              <div>

                <label className="font-medium">
                  Property Images
                </label>

                <label className="mt-2 border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-black transition">

                  <LuUpload  size={40} className="text-gray-400" />

                  <p className="mt-4 font-medium">
                    Upload Property Images
                  </p>

                  <span className="text-sm text-gray-500 mt-1">
                    PNG, JPG up to 10MB
                  </span>

                  <input
                    type="file"
                    multiple
                    hidden
                    onChange={handleImages}
                  />

                </label>

              </div>

              {/* PREVIEW */}
              {images.length > 0 && (

                <div>

                  <h3 className="font-medium mb-3">
                    Preview Images
                  </h3>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                    {images.map((image, index) => (

                      <div
                        key={index}
                        className="relative"
                      >

                        <img
                          src={image.preview}
                          alt=""
                          className="w-full h-32 object-cover rounded-xl"
                        />

                      </div>

                    ))}

                  </div>

                </div>

              )}

            </div>

            {/* FOOTER */}
            <div className="lg:col-span-2 flex justify-end gap-4 pt-6 border-t">

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="px-6 py-3 rounded-xl border hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90"
              >
                Save Property
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}