import Link from "next/link";
import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/icon-tp.png"
                alt="GutLog Icon"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-bold text-slate-900">GutLog</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="mailto:support@gutlog.app" className="text-slate-700 hover:text-blue-600 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy for GutLog</h1>
            <p className="text-lg text-slate-600">Effective Date: August 14, 2025</p>
          </div>

          <div className="prose prose-slate max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Introduction</h2>
              <p className="text-slate-700 mb-4">
                Welcome to GutLog ("we," "us," or "our"). We are deeply committed to your privacy. This policy explains what information the GutLog App (the "App") collects and how it is used.
              </p>
              <p className="text-slate-700 mb-4">
                Our core privacy promise to you is simple: <strong>All of your personal health data is stored exclusively on your device.</strong> We do not have servers that store your logs, and we do not have access to the sensitive health information you enter into the App. You are in complete control of your data.
              </p>
              <p className="text-slate-700">
                By using the GutLog App, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">A. Information You Provide and Store on Your Device:</h3>
              <p className="text-slate-700 mb-4">
                The App requires you to enter information to function. This information is stored only on your local device (your iPhone) and is never transmitted to us. This includes:
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h4 className="font-semibold text-slate-800 mb-2">Health and Wellness Data:</h4>
                <ul className="list-disc list-inside text-slate-700 space-y-1">
                  <li>Bowel movement details (e.g., frequency, consistency based on the Bristol Stool Chart, color)</li>
                  <li>Symptoms (e.g., pain, bloating, blood detection, discomfort)</li>
                  <li>Any personal notes you add to your entries</li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">B. Information You Provide When Contacting Us:</h3>
              <p className="text-slate-700 mb-4">
                <strong>Communications:</strong> If you contact us for support via email, we will have your email address and the contents of your message. We use this only to provide you with support.
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">C. Anonymous Information We Collect to Improve the App:</h3>
              <p className="text-slate-700 mb-4">
                <strong>Anonymous Usage Data:</strong> We may collect anonymous, aggregated data about how you interact with the App, such as which features are used most often and crash reports. This data is not linked to you or your health data in any way and helps us improve the App's performance and user experience.
              </p>
              <p className="text-slate-700 mb-4">
                <strong>Device Information:</strong> We may collect non-identifying information about your device, such as the device model and operating system version, to help us troubleshoot technical issues.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. How Your Information Is Used</h2>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                <li><strong>To Provide App Functionality:</strong> Your health data is used by the App on your device to provide you with its core features, such as logging, tracking history, and generating analytics and reports.</li>
                <li><strong>To Generate Reports:</strong> The App uses the data on your device to create PDF reports. You have the sole discretion to download and share these reports with anyone you choose, such as a healthcare provider. The App does not automatically share this information.</li>
                <li><strong>To Improve Our App:</strong> We use the anonymous and aggregated usage data to understand how our users as a group use GutLog, allowing us to identify bugs and make improvements. This data contains no personal health information.</li>
                <li><strong>To Manage Your Subscription:</strong> Your subscription status is managed securely through Apple's In-App Purchase service. We receive an anonymous confirmation from Apple about your subscription status to unlock premium features but have no access to your payment information.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Data Sharing</h2>
              <p className="text-slate-700 mb-4">
                <strong>We do not have access to your personal health data, so we cannot and do not share it.</strong>
              </p>
              <p className="text-slate-700 mb-4">
                You are the only one who can share your data. The App allows you to create a PDF report which is saved to your device. From there, you can decide to share it. We are not involved in this process.
              </p>
              <p className="text-slate-700 mb-4">
                We do not sell, rent, or share any information under any circumstances, except for the anonymous usage data shared with analytics services for the sole purpose of improving the App.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Data Storage and Security</h2>
              <p className="text-slate-700 mb-4">
                <strong>All of your sensitive health data is stored only on your device.</strong>
              </p>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-3">No Cloud Storage:</h3>
              <p className="text-slate-700 mb-4">
                We do not use any cloud servers to store your personal logs. Your data is not backed up by us. If you delete the App or lose your device, your data will be lost unless you have created your own device backup through Apple's services (e.g., iCloud Backup).
              </p>

              <h3 className="text-xl font-semibold text-slate-800 mb-3">Device Security:</h3>
              <p className="text-slate-700 mb-4">
                The security of your data depends on the security of your device. We strongly recommend that you protect your device with a passcode, Face ID, or Touch ID.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Data Rights and Choices</h2>
              <p className="text-slate-700 mb-4">
                Since your data resides on your device, you have direct and complete control:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                <li><strong>Access and Correction:</strong> You can view and edit all your entries directly within the App at any time.</li>
                <li><strong>Deletion:</strong> You can delete individual entries or all your data by deleting the App from your device. This action is irreversible.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Children's Privacy</h2>
              <p className="text-slate-700 mb-4">
                The GutLog App is not intended for use by individuals under the age of 16. We do not knowingly collect any information from children. All data is user-generated on their own device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Third-Party Services</h2>
              <p className="text-slate-700 mb-4">
                We use Apple's In-App Purchase service to handle subscriptions. Your payment information is processed by Apple, and we encourage you to review Apple's Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-slate-700 mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy within the App and updating the "Effective Date."
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">10. Contact Us</h2>
              <p className="text-slate-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-lg p-4">
                <p className="text-slate-700 text-center">
                  <strong>Email:</strong> <a href="mailto:support@gutlog.app" className="text-blue-600 hover:text-blue-700">support@gutlog.app</a>
                </p>
              </div>
            </section>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
