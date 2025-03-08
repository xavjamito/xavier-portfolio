import { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim().length < 2) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8'
    >
      {submitSuccess ? (
        <div className='text-center py-8'>
          <div className='mb-4 text-green-500 dark:text-green-400'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-16 w-16 mx-auto'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
          </div>
          <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-2'>
            Message Sent!
          </h3>
          <p className='text-gray-600 dark:text-gray-400'>
            Thank you for reaching out. I'll get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              htmlFor='name'
              className='block text-gray-700 dark:text-gray-300 mb-2'
            >
              Name <span className='text-red-500'>*</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.name
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder='Your name'
            />
            {errors.name && (
              <p className='mt-1 text-red-500 text-sm'>{errors.name}</p>
            )}
          </div>

          <div className='mb-6'>
            <label
              htmlFor='email'
              className='block text-gray-700 dark:text-gray-300 mb-2'
            >
              Email <span className='text-red-500'>*</span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder='your.email@example.com'
            />
            {errors.email && (
              <p className='mt-1 text-red-500 text-sm'>{errors.email}</p>
            )}
          </div>

          <div className='mb-6'>
            <label
              htmlFor='subject'
              className='block text-gray-700 dark:text-gray-300 mb-2'
            >
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              className='w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary'
              placeholder='What is this regarding?'
            />
          </div>

          <div className='mb-6'>
            <label
              htmlFor='message'
              className='block text-gray-700 dark:text-gray-300 mb-2'
            >
              Message <span className='text-red-500'>*</span>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.message
                  ? "border-red-500 dark:border-red-400"
                  : "border-gray-300 dark:border-gray-700"
              } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary`}
              placeholder='Your message here...'
            ></textarea>
            {errors.message && (
              <p className='mt-1 text-red-500 text-sm'>{errors.message}</p>
            )}
          </div>

          {submitError && (
            <div className='mb-6 p-4 bg-red-100 text-red-700 rounded-md'>
              {submitError}
            </div>
          )}

          <button
            type='submit'
            disabled={isSubmitting}
            className='w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed'
          >
            {isSubmitting ? (
              <span className='flex items-center justify-center'>
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
