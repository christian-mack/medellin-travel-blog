import { inter } from "@/app/fonts";
import { cn, devLog, devLogHeader } from "@/lib/utils";
import { loops } from "@/utils/loops";

export default function NewsletterSignUp() {
  async function createNewSubscriber(data: FormData) {
    "use server";

    const newSubscriber = {
      email: data.get("email") as string,
      properties: {
        firstName: data.get("firstName") as string,
        lastName: data.get("lastName") as string,
        userGroup: data.get("userGroup") as string,
      },
    };

    const response = await loops.createContact(
      newSubscriber.email,
      newSubscriber.properties
    );

    devLog([devLogHeader("newsletterSignUp: Form Data Submitted"), response]);
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
        <input
          className="w-full mb-4 px-3 py-2 border border-gray-300 rounded"
          type="hidden"
          name="userGroup"
          value="Website signups"
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
