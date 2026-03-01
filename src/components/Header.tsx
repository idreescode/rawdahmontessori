import ScrollHeader from "./ScrollHeader";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Header({ linkPrefix = "" }: { linkPrefix?: string }) {
  return (
    <ScrollHeader>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="header">
              <div className="logo">
                <Link href="/">
                  <img src="/images/logo.png" alt="Rawdah Montessori" />
                </Link>
                <MobileMenu>
                  <ul>
                    <li><a href={`${linkPrefix}#mission`}>MISSION</a></li>
                    <li><a href={`${linkPrefix}#vision`}>VISION</a></li>
                    <li><a href={`${linkPrefix}#about`}>ABOUT MONTESSORI</a></li>
                    <li><a href={`${linkPrefix}#admission`}>ADMISSION ENQUIRIES</a></li>
                    <li><a href={`${linkPrefix}#recruitment`}>RECRUITMENT</a></li>
                  </ul>
                </MobileMenu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollHeader>
  );
}
