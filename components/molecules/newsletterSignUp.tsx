import { inter } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { loops } from "@/utils/loops";

export default function NewsletterSignUp() {
  async function createNewSubscriber() {
    "use server";
    // Submit formData to your newsletter service.
    const response = await loops.createContact("sfacmack@icloud.com");
    console.log("Form Data Submitted", response);
  }

  return (
    <div className="mx-auto my-10 rounded-lg">
      <h2 className="text-3xl font-semibold mb-6">
        Sign Up for Our Newsletters
      </h2>
      <p className={cn("text-gray-700 mb-4", inter.className)}>
        Get notified of the best deals on our WordPress themes.
      </p>
      <form action={createNewSubscriber} className={inter.className}>
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
        />
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
          type="text"
          name="lastName"
          placeholder="Enter your last name"
        />
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          →
        </button>
        <label className="flex items-center mt-4">
          <input type="checkbox" name="consentGiven" className="mr-2" />
          By checking this box, you confirm that you have read and are agreeing
          to our terms of use regarding the storage of the data submitted
          through this form.
        </label>
      </form>
    </div>
  );
}
