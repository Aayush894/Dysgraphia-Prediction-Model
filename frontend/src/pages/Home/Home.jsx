/* eslint-disable react/no-unescaped-entities */
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer";

export function Home() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const form = useRef();

  const sendEmail = async () => {
    console.log("Submit conatct details");

    await fetch(`http://localhost:5000/api/sendemail`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status > 199 && res.status < 300) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("Error occur while fetching sendmail api", err);
      });
  };

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <h1 className="text-white mb-6 font-black">
                Your story starts with us.
              </h1>
              <p className="text-white opacity-80">
                This is a simple example of a Landing Page you can build using
                Material Tailwind. It features multiple components based on the
                Tailwind CSS and Material Design by Google.
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"></div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <h3 className="text-blue-gray mb-3 font-bold">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-blue-gray-500 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                maiores iure ullam itaque soluta doloribus quia ad quaerat
                dolore dignissimos quasi at alias cumque veritatis eum ex,
                aspernatur inventore pariatur.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
                eveniet rem sed minus rerum, nemo molestiae reiciendis cum
                placeat perferendis, harum beatae velit? Illo minima sed, totam
                laborum dolorum similique.
              </p>
              <button className="btn btn-primary">Read More</button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <div className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <div className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.png"
                    className="h-full w-full"
                  />
                </div>
                <div className="p-4">
                  <p className="text-blue-gray font-normal mb-2">Enterprise</p>
                  <h5 className="text-blue-gray font-bold mb-3 mt-2">
                    Top Notch Services
                  </h5>
                  <p className="text-blue-gray-500 font-normal">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Info */}
      <section className="py-5 team4" id="team">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-7 text-center">
              <h3 className="mb-3 display-5">Team</h3>
              <h6 className="subtitle">
                You can rely on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 mb-4 shadow-sm">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/026/619/142/non_2x/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg"
                    alt="wrapkit"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Aayush Kumar Shrivastava
                    </h5>
                    <h6 className="subtitle mb-3">Backend Developer</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="/"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4 shadow-sm">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/026/619/142/non_2x/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg"
                    alt="wrapkit"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Kartik Verma
                    </h5>
                    <h6 className="subtitle mb-3">Frontend Development</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="#"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="#"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4 shadow-sm">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/026/619/142/non_2x/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg"
                    alt="wrapkit"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Archit Goel
                    </h5>
                    <h6 className="subtitle mb-3">Machine Learning</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="#"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="#"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4 shadow-sm">
              <div className="row">
                <div className="col-md-12">
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/026/619/142/non_2x/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg"
                    alt="wrapkit"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-12 text-center">
                  <div className="pt-2">
                    <h5 className="mt-4 font-weight-medium mb-0">
                      Abhishek Verma
                    </h5>
                    <h6 className="subtitle mb-3">Machine Learning</h6>
                    <p>
                      You can relay on our amazing features list and also our
                      customer services will be great experience.
                    </p>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <Link
                          to="#"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-facebook"></i>
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link
                          to="#"
                          className="text-decoration-none d-block px-1"
                        >
                          <i className="icon-social-twitter"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact Info */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <form
            className="mx-auto w-full mt-12 lg:w-5/12"
            ref={form}
            onSubmit={sendEmail}
          >
            <p className="text-center display-5">Contact us</p>
            <p className="text-center w-responsive mx-auto mb-5">
              Do you have any questions? Please do not hesitate to contact us
              directly.
            </p>
            <div className="mb-8 flex gap-8">
              <div className="w-100">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white"
                  autoComplete="off"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
              </div>
              <div className="w-100">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white"
                  autoComplete="off"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
              </div>
            </div>
            <div className="pb-10">
              <input
                type="text"
                id="subject"
                name="subject"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white"
                autoComplete="off"
                value={formData.subject}
                onChange={handleChange}
              />
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
            </div>
            <div className="pb-10">
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white"
                autoComplete="off"
                rows={5}
                value={formData.message}
                onChange={handleChange}
              />
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="lg mr-4 ml-1"
              />
              <label
                htmlFor="terms"
                className="text-sm font-normal text-gray flex items-center"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900 ml-1"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div className="text-center text-md-left">
              <button
                type="submit"
                className="text-white bg-indigo-600 rounded-md lg:ml-5 btn btn-primary"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;