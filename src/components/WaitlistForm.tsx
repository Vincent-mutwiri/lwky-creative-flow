import React, { useState } from 'react';
import { cn } from "@/lib/utils";

const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', platform: '' });
  const [errors, setErrors] = useState({ name: '', email: '', platform: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', email: '', platform: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }
    if (!formData.platform.trim()) {
      newErrors.platform = 'Platform is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch('https://sheetdb.io/api/v1/fmbwh0ad7p6q0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: formData })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', platform: '' });
      } else {
        alert('Submission failed. Try again later.');
      }
    } catch (error) {
      alert('An error occurred: ' + error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 px-6 bg-gradient-to-b from-lwky-deep-blue to-lwky-black relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-5"></div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the <span className="text-lwky-gold">Movement</span>
            </h2>
            <p className="text-white/70">
              Be among the first to experience LWKY when we launch. Get exclusive early access and special rates.
            </p>
          </div>

          <div className="bg-gradient-to-br from-lwky-deep-blue to-lwky-blue p-8 rounded-2xl border border-white/10 shadow-xl animate-fade-in">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="bg-lwky-gold/20 text-lwky-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Success! You're on the list</h3>
                <p className="text-white/70 mb-6">
                  Thank you for joining the LWKY waitlist. We'll notify you when we launch.
                </p>
                <button onClick={() => setIsSubmitted(false)} className="btn-secondary">
                  Join Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-white mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn("input-field", errors.name && "border-red-500")}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="block text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn("input-field", errors.email && "border-red-500")}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mb-8">
                  <label htmlFor="platform" className="block text-white mb-2">Your Primary Platform</label>
                  <select
                    id="platform"
                    name="platform"
                    value={formData.platform}
                    onChange={handleChange}
                    className={cn("input-field text-black", errors.platform && "border-red-500")}
                  >
                    <option value="">Select a platform</option>
                    <option value="youtube">YouTube</option>
                    <option value="instagram">Instagram</option>
                    <option value="tiktok">TikTok</option>
                    <option value="spotify">Spotify</option>
                    <option value="photography">Photography</option>
                    <option value="videography">Videography</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.platform && <p className="text-red-500 text-sm mt-1">{errors.platform}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn("btn-primary w-full flex items-center justify-center", isSubmitting && "opacity-70 cursor-not-allowed")}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-lwky-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Join the Waitlist"
                  )}
                </button>

                <p className="text-xs text-center text-white/50 mt-4">
                  By submitting, you agree to receive updates from LWKY about our services.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
