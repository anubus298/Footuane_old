import { Footer } from "flowbite-react";

function FooterComp() {
  return (
    <Footer container={true} className="dark:bg-mainGrey rounded-none mt">
      <div className="w-full text-center ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.LinkGroup>
            <Footer.Link className="mx-2" href="#about">
              حولنا
            </Footer.Link>
            <Footer.Link className="mx-2" href="#about">
              شروط الخصوصية
            </Footer.Link>
            <Footer.Link className="mx-2" href="#about">
              الإعلان
            </Footer.Link>
            <Footer.Link className="mx-2" href="#about">
              تواصل
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="Footuane" year={ new Date().getFullYear()} />
      </div>
    </Footer>
  );
}

export default FooterComp;
