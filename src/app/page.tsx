import Header from '@/src/components/home/header';
import ContinueSearch from '@/src/components/home/continueSearching';
import OnlineShop from '@/src/shared/sharedComponents/shop';
import shopNow from '@/public/shopNow.png';
import tradeIn from '@/public/tradeIn.png';
import buyFast from '@/public/buyFast.png';

export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <ContinueSearch />
      <OnlineShop
        title="ონლაინ მაღაზია"
        desc=" შეიძინე ონლაინ საშენო პროდუქცია, 300-ზე მეტი მაღაზიისგან და მიიღე სასურველ მისამართზე
          მთელს საქართველოში"
        buttonTxt="დაიწყე შოპინგი"
        img={shopNow}
      />
      <OnlineShop
        title="Trade in - შეცვალე ძველი ტექნიკა ახლით"
        desc="ატვირთე შენი ძველი ტექნიკის მონაცემები, ჩააბარე და დაიბრუნე მისი ღირებულება საბანკო ანგარიშზე"
        buttonTxt="დაწყება"
        img={tradeIn}
        rightToleft={true}
      />
      <OnlineShop
        title="იყიდე-გაყიდე ნივთები მარტივად და სწრაფად"
        desc="იყიდე/გაყიდე მეორადი ან ახალი პროდუქცია განვადების შესაძლებლობით ონლაინ. ისარგებლე კურიერის მომსახურებით ან პირადად შეხვდით ერთმანეთს."
        buttonTxt="იყიდე ახლა"
        img={buyFast}
      />
    </main>
  );
}
