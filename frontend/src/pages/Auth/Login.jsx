import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import AuthLayout from "../../layouts/AuthLayout";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";

import { supabase } from "../../lib/supabase";

export default function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleLogin(e) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (error) {
      setLoading(false);
      toast.error(error.message);
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single();

    setLoading(false);

    if (profileError) {
      toast.error("Unable to fetch profile.");
      return;
    }

    toast.success("Login Successful!");

    if (profile.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/resident");
    }
  }

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Login to your Gharkul account"
    >
      <form onSubmit={handleLogin} className="space-y-5">

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
          {loading ? "Signing In..." : "Login"}
        </Button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-emerald-600 hover:underline"
          >
            Create Account
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}