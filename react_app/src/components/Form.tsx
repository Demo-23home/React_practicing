import React, { HtmlHTMLAttributes, useRef, useState } from "react";
import { FormEvent } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name:string,
  age:number
}




export const Form = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<FormData>();
  


  const onSubmit = (data:FieldValues) => console.log(data)

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", {required:true, minLength:3} )}
          id="name"
          type="text"
          className="form-control"
        />
        { errors.name?.type === "required" && <p className="text-danger">the name field is required</p>}
        { errors.name?.type === "minLength" && <p className="text-danger">the name must be at least 3 chars</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};
