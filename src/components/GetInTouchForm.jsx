
import React from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const GetInTouchForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Call your API here using fetch or axios
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow-md space-y-4 w-full max-w-md">
      <h2 className="text-xl font-semibold">Get in Touch</h2>

      <input
        type="text"
        placeholder="Full Name"
        {...register('name', { required: true })}
        className="w-full border p-2 rounded"
      />
      {errors.name && <p className="text-red-500 text-sm">Name is required</p>}

      <input
        type="email"
        placeholder="Email"
        {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        className="w-full border p-2 rounded"
      />
      {errors.email && <p className="text-red-500 text-sm">Enter a valid email</p>}

      <PhoneInput
        country={'us'}
        inputClass="!w-full !p-2 !rounded !border"
        onChange={(phone) => setValue('phone', phone)}
      />
      {errors.phone && <p className="text-red-500 text-sm">Phone number is required</p>}

      <select {...register('service')} className="w-full border p-2 rounded">
        <option value="">Select a Service</option>
        <option value="Design">Design</option>
        <option value="Language">Language</option>
        <option value="Technology">Technology</option>
      </select>

      <textarea
        placeholder="Your Message"
        {...register('message')}
        className="w-full border p-2 rounded"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default GetInTouchForm;
