import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";


const details = {
    name: 'VIJAY J',
    bio: 'Frontend Developer',
    contact: {
      email: 'google@gmail.com',
      github: 'https://github.com',
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://twitter.com',
    },
 };

const Contact=()=>{
    return(
        <div className="min-h-screen ml-10"  >
            <h1 className="text-2xl my-4 font-bold">Contact</h1>
            <div>
                <h2>Hi 👋, I'm {details.name}  👩‍💻</h2>
                <p className="text-lg">{details.bio}</p>

                <div className="my-4 space-y-2">
                    <h3 className="text-lg font-semibold">Connect with me</h3>
                    <p className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold">Gmail: </span>
                        <a href={details.contact.email} className="flex items-center gap-1">
                            {details.contact.email}
                        </a>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4"/>
                    </p>

                    <p className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold">Github: </span>
                        <a href={details.contact.email} className="flex items-center gap-1">
                            {details.contact.github}
                        </a>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4"/>
                    </p>

                    <p className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold">Linkedin: </span>
                        <a href={details.contact.email} className="flex items-center gap-1">
                            {details.contact.linkedin}
                        </a>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4"/>
                    </p>

                    <p className="flex flex-wrap items-center gap-2">
                        <span className="font-semibold">Twitter: </span>
                        <a href={details.contact.email} className="flex items-center gap-1">
                            {details.contact.linkedin}
                        </a>
                        <ArrowTopRightOnSquareIcon className="w-4 h-4"/>
                    </p>
                </div>
            </div>
        </div>
    )
}


export default Contact;