import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AuthLayout from "../../layouts/AuthLayout";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { supabase } from "../../lib/supabase";

export default function Signup() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSignup(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,

      options: {
        data: {
          full_name: form.full_name,
        },
      },
    });

    setLoading(false);

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success("Account created successfully!");

    navigate("/login");
  }

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Create your Gharkul resident account"
    >
      <form onSubmit={handleSignup} className="space-y-5">

        <div>
          <Label>Full Name</Label>

          <Input
            name="full_name"
            placeholder="John Doe"
            value={form.full_name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Email</Label>

          <Input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <Label>Phone (Optional)</Label>

          <Input
            name="phone"
            placeholder="9876543210"
            value={form.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <Label>Password</Label>

          <Input
            type="password"
            name="password"
            placeholder="********"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-emerald-600 hover:bg-emerald-700"
          disabled={loading}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}