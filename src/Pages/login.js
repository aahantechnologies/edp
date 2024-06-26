import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import pro1 from "../Images/profile-first.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function LoginPage() {
  const history = useNavigate();
  const { handleSubmit } = useForm();
  const onSubmit = async()=>{
       history("/home")
  }
  return (
    <div className="bg-[#e8f5ff] p-8 ">
      <h1 className="text-6xl lg:text-8xl md:text-8xl font-bold text-[#0174cf] mt-8 ">Welcome!</h1>
      <h1 className="text-3xl font-bold text-[#5d9dcf] mt-4">Ward 2</h1>
      <p className="text-xl font-medium text-[#87afcf] mt-4">
        Please enter your password to access data
      </p>
      <div className="flex justify-center gap-x-8 mt-10 mb-3">
        <div>
          <Card
            sx={{
              width: "18rem",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              padding: "1rem",
              borderRadius: "20px",
            }}
          >
            <Avatar
              sx={{ width: "50%", height: "50%", marginTop: "20px" }}
              alt="Travis Howard"
              src={pro1}
            />
            <h1 className="text-2xl font-bold text-[#0174cf] mt-2">
              Brooklyn Simmons
            </h1>
            <p className="text-base font-medium text-[#87afcf] mt-2">
              Acme Co.
            </p>
          </Card>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-center">
        <div className="w-72">
          <h6 className="text-start text-[#348acf]">Password</h6>
          <input required className="h-10 w-72 rounded-lg p-2" />
        </div>
      </div>
      <div className="flex justify-center">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "1rem",
            width: "20%",
          }}
        >
          <div
            style={{ flex: 1, height: "1.5px", backgroundColor: "#0174cf" }}
          />

          <div>
            <p style={{ width: "50px", textAlign: "center", color: "#5d9dcf" ,fontWeight:"500"}}>
              or{" "}
            </p>
          </div>

          <div
            style={{ flex: 1, height: "1.5px", backgroundColor: "#0174cf" }}
          />
        </div>
      </div>
      <div>
      <button type="submit" className="text-[#348acf] font-medium text-lg mt-4 mb-8">Just view data</button>
        {/* <Link style={{textDecoration:"none"}} to="/home"><h6 className="text-center text-[#348acf] font-medium text-lg mt-4 mb-8"></h6></Link> */}
      </div>
      </form>
    </div>
  );
}
