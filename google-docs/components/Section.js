import Image from 'next/image'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Section() {
    return (
        <section className="bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between py-6">
          <h2 className="text-gray-700 text-lg">Start a new document</h2>

          <Button
          color="gray"
          buttonType="outline"
          iconOnly={true}
          className="border-0"
          >
            <Icon name="more_vert" size="3xl" />
          </Button>
        </div>
        <div>
            <Image src="https://links.papareact.com/pju" />
        </div>
      </div>
    </section>
    )
}

export default Section
