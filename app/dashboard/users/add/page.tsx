import React from "react";

const AddUserPage = () => {
  return (
    <div className="bg-card p-5 rounded-lg mt-5">
      <form action="" className="flex flex-wrap justify-between">
        <input
          className="p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7"
          type="text"
          placeholder="username"
          name="username"
          required
        />
        <input
          className="p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7"
          type="email"
          placeholder="email"
          name="email"
          required
        />
        <input
          className="p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7"
          type="password"
          placeholder="password"
          name="password"
          required
        />
        <input
          className="p-4 w-2/5 bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7"
          type="tel"
          placeholder="phone"
          name="phone"
          required
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-4 w-2/5 bg-card text-soft border-2 border-[#2e374a] rounded-sm mb-7"
        >
          <option value="false" selected>
            Is Admin ?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select
          name="isActive"
          id="isActive"
          className="p-4 w-2/5 bg-card text-soft border-2 border-[#2e374a] rounded-sm mb-7"
        >
          <option value="false" selected>
            Is Active ?
          </option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          rows={3}
          placeholder="address"
          className="p-4 w-full bg-transparent text-soft border-2 border-[#2e374a] rounded-sm mb-7"
        />
        <button
          type="submit"
          className="w-full p-4 bg-view text-soft rounded-sm cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
