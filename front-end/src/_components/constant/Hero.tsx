import RecipeCard from "./RecipeCard";
import StarIcon from "../svg/StarIcon";
import Foodcategory from "./Foodcategory";
import Footer from "./Footer";

const Hero = () => {
  return (
    <div className="bg-green-500 w-full h-[788px] ">
      <div className="flex justify-around items-center py-44">
        <div className="flex gap-5 flex-col ">
          <div>
            <h3 className="font-semibold text-[55px] w-[360px] text-white ">
              Pinecone Food Delivery
            </h3>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white w-[384px]">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </div>
        </div>
        <div>
          <div>
            <img src="/FoodIcon.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <RecipeCard />
      </div>
      <div className="mt-[180px] flex justify-around gap-[500px] items-center  ">
        <div className="flex items-center gap-3 ">
          <StarIcon />
          <h3 className="text-2xl font-bold">Хямдралтай</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400 ">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[30px]">
        <Foodcategory
          image="https://www.figma.com/file/VqYifDAzddKNk05lRmWEPe/image/669a97cef4ad7e823b2a1cb020f7b7e74bce1ed7"
          description="Өглөөний хоол"
          amount="14,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/126b/c4b5/18352f27a399e723ba8fe9d39d12c27f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ccsFVxoQjjyUBQIC7nrAhnqyidL0Wm7qgCQE9ftH8p2O0GcRDqCYg-ZQPcif8j9zEJkRq9MTc0UNa1knRAByCCLVg8PL~rJ16g61rNHLbK9rO83yQGSMLCA7nRGUscV5hKZQsvwOLjLzS30qhNxgz8jEoeJ6MmAywr5Vc6Bmoctz7NXyaOeJCjoq0Ye2vQFL55H1ONLplkGTgrC0frm-LP~7QVakHalyKBj68wivz~VBiT2yiLFEsTYzmxh63Meha8mcY8I8JYxpvDiOW5JTL7vvo5wsTJ1oqsQRvFYHk7X7TDefHCkJgP~jcWjU~ZTLdiXah1MwybrVBnnGfOjIug__"
          description="Зайрмаг"
          amount="4,600"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/27cb/2c3b/60df84dc4dd7d808ba224aff01eeb6d8?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OPZKWyAOU~AGY4TNeVwREzu4JbUMMov8ELR3v0kVJ2G2A0jtjHntuPJROEacxhzN15RDOKLfNjibAdn43Ezf0N2Vxm8eMcPTbS8zv4tr0aINRJUo-iM4QGJxRJ6uXJd5zsydHX23Ims~vkKl6RTyip4N9VwYAlDkDMxsJIiaXKyuYuZrOpiL55J60P~PSDzaqyQJqwUUsA8aGtuIqaWyPIRId1~V9d1uDf2c6UzGamqqcXFSQnU69E6vnMIVRNYlrW~fSwp4cGGUsbcxEIuy1yRqwErl-0Lmdb3wmbAedX1XhaOV2r7sD0RUR4PDzFk~R0p-KE~o6uPQzIIYZmA05A__"
          description="Өглөөний хоол"
          amount="24,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/0765/ebe5/ba234ec6e3de87f32b816439af24885e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h9mCOOkLms7-z2PhM0o7qjZZoedYYc6nhDr3T8xb-qbBOwv5sKw~nHmg3ZbW-KE2dVTrMNJxa7tpfPFti4CSxuezvIPR2z35DUNPzNjjfEH0zGnZ98WPp5cq-U-KUND6hruP1CE1VDzi89zLOSqCsovOBJ7YuQzv5k7wo9ah6ovHTmC9t1stfdhumn-UNGYvSC9lKXgH95sWyKrw2uEL9sUXLqvSrny~Vp29kuc-3KtazDUEoVp8vOCPvqGdF1JAuOJD8G9zV6VmnKCKliRgedqzc4mHhVq1sj2CJDnx66mTI05ikmVVE9h9PG83ujc7sW-gNqqcp~QRJ0Ph5KKzKQ__"
          description="Breakfast"
          amount="24,800"
        />
      </div>
      <div className="mt-[120px] flex justify-around gap-[500px] items-center  ">
        <div className="flex items-center gap-3 ">
          <StarIcon />
          <h3 className="text-2xl font-bold">Үндсэн хоол</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10 mt-[30px]">
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/1f91/a1b6/d973c90c192043aefe86e4258acae7e6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTok2YnRoKy5C-EmxJjP0UJkF9IKTTWuYbe102ty3DZ0NWYL6S2r1YoLudOdUhkRYde6p7c3N~mXWJTRopUoBAmeNodVByWiQSEl7JmCdH~lt6Lyji9Qx9kAkspPqTFFeBzWSK6tX~EhQTCgRI3fycQ72-wrSJTCmiHbBsMh41N8SI-ix9XSvau9mJdVFpmJZMEWEiubvFF4h-AXlM62PV6wDYZsFDpxo~~FfXAgD~T8~taFLP5HggAfgqx0b3IqOIt7Ta8DPdg2iSQqTiKrWO5HMPf6WIyzvlSBNxnHSnZlf-oTZayJM5u7FmcJnRZ-VFyNji~og-4nT9f-qXQoRA__"
          description="Main Pizza"
          amount="34,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/abab/8928/c4c79b15138c71b44dc8c2202844dd61?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fu~oB~F0X9pFrOxi3xny3B66Hro04l2BM8IxWSkaFn~lrJf6TAD5-QEHMCEKF~MFmfR6-mzMTc-j2XnnraFkmUXbCiced5HKlQqGN47yDcIXVVVpN-kgXqPA04OCT-8xaE3tTr-DUq0hFh16N9lp9p1c5j3QMJELz20Pi1zfKiUefPTtjXyQYUYcfsZgC62r51OICvxOkQKzetjxsv7KE~eMWKh2nm6MciZgMd7Xq9tUKIi-2xkSrvydo8Jsx1vQRoZ1Ldb0MnYlgIYf4qmnjqZiACfi67BQ9ognQPGZilqi0xBjZtaB-6IaYfK~KKA-Xtglol1xe2y~~aGUiPso6w__"
          description="Food Tart"
          amount="22,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/2f37/7051/9e7e809c3cf6728577b57b6d7525ade6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ozqy~MLYr-s2HiLSyEaVvCCB6n3Or58gDPDLFG~c1bz7ke6Oe20WqBPHsURJxUXr8fTgcte1UNU20oF60FcgpNXhqzY3CZo03miViusuSlsRo0GKnF2lFpb6ZdqPOQQyAjkF8O3kGAssimGbaESbWyFRO9IqPtTofXAnnUFoJWzJX8v8n40JylKEwPooIMI-bnD6wSFf-z7b9tChlgWeNiKk1pqisLYSKivWEjOjrePhK8rQSakPIfQ5JhxkauvHeioPCcrwnbu5DkF2NOuNPg4PW65LhPH~OpgarDeH842aL6XPWv5JoR-nS83Vk5bSoLxANmrhZQlnIcqMxUYrcg__"
          description="Өглөөний хоол"
          amount="14,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/212a/1c96/f7a2a9e4728cdfcd39a141afa4d32e5c?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vn~NkaRdocLqwwjdzch8VdjS8d4APSNGpuskSdyhhJxQMWpApDlVPr49oyOTMuIalHhSHSmoDuvcuN8SRHrru4drwd0v3MHaqL4x5wuUfPH5IjPJQCteHvU8SMCsZ1MU37AI5cU9itB4rzKA6tSZWGavx790lwP30TxUo7vfTJK4cp2NgLp-~gGWh8uLJAJ1mgwz9ufqal0uTiwhTmx0M9Od0usORtknK~Kpjt8YqWbtHenpBs3I0RDTc7qEcygeLsvoWpmU~6bb-lIVH1LlpKBuBbT3JmQeGe42bcICLvpZfrOB~rQt6pnA5V3HBXsVEypJ~rZlqxQbpgaQKpEZYw__"
          description="Зутан шөл"
          amount="17,800"
        />
      </div>
      <div className="mt-[120px] flex justify-around gap-[500px] items-center  ">
        <div className="flex items-center gap-3 ">
          <StarIcon />
          <h3 className="text-2xl font-bold">Салад ба зууш</h3>
        </div>
        <div>
          <button className="hover:shadow-2xl">
            <h3 className="text-green-400">Бүгдийг харах</h3>
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-10  mt-[30px]">
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/3527/9f71/293873e46dff98a580a78ab4b4726c6b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SomTqDD7G4i1qqm53DwmfOoSXszcXJJj28MobYYzMfuzhZLs1DcCixXxBdA7PP6f66mBMUIaU9~RLy6veJVCQZp~B71MchLap99ua2GkKbG1vTG-oDwjVFuxtry1zIWw0FDaHwoNaTkbcPj~Cx6VY-vaZPF8QxnMy-22ivE5ZFcn-yyQh9dO98s2G-kXIxqN3DYxnGPSGjkTfGpCJPrh9qb0cmfO~YENCGwQGix1WC1TvhDYpTGdE9ygZMLSkSALoK~Dzsq-KlwDI7xPCCcCR~wfTALHfCTVh3aE4rDxu~rglV34fbXEc9kT1sD3hHXJuxNCxmVQ9IXbdDUumCYYVA"
          description="Чихэрлэг тахиа"
          amount="24,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/b431/2488/234932ece9518f322015f20968988ab7?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a16FFU59zsVJxTPwaATWsUq1kcUnblq-lxYGExsr5Bk2G8HC6bz6aQlmskziFFQ1gbpQu1ChUI-9kuZbvrgJTchps2TEqmVlDxhI9halCcG0of0AKBDIKIRUU4H7eDNcYo2i92DSsqJw4KvbwgTt1Z25OvVQTK1uB8Qp-aVTWRfsIBRwTtRhTAZZRtNW-mD1S8~vxiSnn9jW7ZYpKbxM89Zl7NGiojX2znlWVHI9uC9yO3Ons3oEIoznALrvveIToDxBu0eD3Ei~AZE5NaWRAaAcxjuNb4CPSv~IJoUgfKSeRW9LaPoLA8k76-wl0TBYflcJBT-3LZNlQAPxJcuV5g"
          description="Lunch"
          amount="24,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/fe7d/c5a7/8a8c3a1050476c2fdbcb3f74d438adc2?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FKPPpOnZSV6L~iJ19WrHce57zpol2zvvCiguWwJJREg8DyBavY5LcrSQv0dcZ4G9Buwa6ilVUGZ07oDtN6gh3P6MjJCcxi6Q42rP8UdICjhEWUltzmdEHL26QNYFIHRtcVLoasH5SsyudqMSrXNPy0Bw4ltymhJWBJj5apCetdSUbH9s80NPrc5wRR3t5CT4zXnc5Xl~paN9srdbH9KWu3I8iYugBHXcf37i-C9apK6Pl9rR8t97bjt2jKDegzI3ryEh67LWuWXENCKSs2LPFSlvaz4vaDo3Bd4XaSMAYzyerWvVuODcb3r1YFW-qzyClOPEXbWDqLZ7GspI0lku7Q"
          description="Сэндвич"
          amount="14,800"
        />
        <Foodcategory
          image="https://s3-alpha-sig.figma.com/img/8de6/08f4/fc3d415a9e59a1a8de7a0d9189e0fa8d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fr9Rbuu1rwwIGYXR26jZ9kZPNKUGTyLpWPSKer53vpT3I0y2WkUUG3qeDkuK9e4n2HjjU3RPcuCLgsg4K13I59dTY~3NGQG-wgf56IW7BVDrzrKZ5-e-xkr6UM5L6Ij33l-nRn-xNeCDRxmc-2Rh1mFQNqyuimo1X1Lt3aFT~dSo9S3HFesTlaWqdAZfy5XSTwPxlkB-ewCeu6cV5modd1LwUed3U-yMmGm7laz6MHCRj2mtIcJxzAvtAqyQch1Ie0hVljALbvL5yexOu1ZeOP3E0h20U0PACVwHlquufRh42zHPbWcpuW9payNRUMD0MvykwxV9rs2mJ0rASn5MYw__"
          description="Apple Pie"
          amount="34,800"
        />
      </div>
      <Footer />
    </div>
  );
};
export default Hero;
