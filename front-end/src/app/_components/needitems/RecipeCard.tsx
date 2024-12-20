"use client";
import * as React from "react";
import BookIcon from "../svg/BookIcon";

const RecipeCard = () => {
  return (
    <div className=" flex flex-row gap-20 card bg-base-100  mt-[100px] ">
      <div className="card-body shadow-md  rounded-xl hover:shadow-2xl">
        <div>
          <div className=" py-4 ">
            <BookIcon />
          </div>
          <div>
            <p className="card-title">Хүргэлтийн төлөв хянах</p>
            <p>Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
      <div className="card-body shadow-md rounded-xl hover:shadow-2xl">
        <div>
          <div className=" py-4">
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.75 0.21875C6.72266 0.21875 0.21875 6.72266 0.21875 14.75C0.21875 22.7773 6.72266 29.2812 14.75 29.2812C22.7773 29.2812 29.2812 22.7773 29.2812 14.75C29.2812 6.72266 22.7773 0.21875 14.75 0.21875ZM27.4062 14.75C27.4062 21.7227 21.7227 27.4062 14.75 27.4062C7.77734 27.4062 2.09375 21.7812 2.09375 14.75C2.09375 7.83594 7.71875 2.09375 14.75 2.09375C21.6641 2.09375 27.4062 7.77734 27.4062 14.75ZM18.6758 19.9648C18.9688 20.1992 19.4375 20.082 19.6133 19.7891L20.1406 19.1445C20.375 18.793 20.2578 18.3828 19.9648 18.1484L15.8633 15.1602V6.54688C15.8633 6.19531 15.5117 5.84375 15.1602 5.84375H14.3398C13.9297 5.84375 13.6367 6.19531 13.6367 6.54688V15.9219C13.6367 16.1562 13.6953 16.332 13.8711 16.5078L18.6758 19.9648Z"
                fill="#18BA51"
              />
            </svg>
          </div>
          <div>
            <p className="card-title">Шуурхай хүргэлт</p>
            <p>Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
      <div className="card-body shadow-md rounded-xl hover:shadow-2xl">
        <div>
          <div className=" py-4">
            <svg
              width="31"
              height="31"
              viewBox="0 0 31 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M29.5039 17.625H29.7969C30.207 16.8047 30.4414 15.8672 30.5 14.8125C30.5 12.8789 29.6211 11.1797 28.2734 9.94922C27.3945 6.84375 24.5234 4.5 21.125 4.5C20.8906 4.5 20.6562 4.55859 20.4805 4.61719C19.4258 2.33203 17.1992 0.75 14.5625 0.75C11.9258 0.75 9.64062 2.33203 8.58594 4.61719C8.41016 4.55859 8.17578 4.5 8 4.5C3.83984 4.5 0.5 7.89844 0.5 12C0.5 14.2852 1.49609 16.2773 3.07812 17.625H1.4375C0.910156 17.625 0.441406 18.0938 0.5 18.6211C0.851562 23.1328 3.89844 26.8242 8 28.2305V28.875C8 29.9297 8.82031 30.75 9.875 30.75H21.125C22.1797 30.75 23 29.9297 23 28.875V28.2305C27.043 26.7656 30.0898 23.0742 30.4414 18.6211C30.5 18.0938 30.0898 17.625 29.5039 17.625ZM28.625 14.8125C28.5664 15.9258 28.2148 16.8633 27.6289 17.625H20.1875C19.6016 16.8633 19.25 15.9258 19.25 14.8125C19.25 12.2344 21.3008 10.125 23.9375 10.125C26.5156 10.125 28.625 12.2344 28.625 14.8125ZM2.375 12C2.375 9.94922 3.72266 5.90625 9.875 6.375C11.457 2.68359 13.6836 2.625 14.5625 2.625C15.3828 2.625 17.6094 2.625 19.25 6.375C21.3008 6.25781 23.7031 6.31641 25.4609 8.48438C24.9336 8.36719 24.4062 8.30859 23.9375 8.25C20.3047 8.30859 17.375 11.2383 17.375 14.8125C17.375 15.8672 17.6094 16.8047 18.0195 17.625H15.5V6.84375C15.5 6.60938 15.2656 6.375 15.0312 6.375H14.0938C13.8008 6.375 13.625 6.60938 13.625 6.84375V16.3359L7.12109 9.83203C7.00391 9.71484 6.88672 9.71484 6.76953 9.71484C6.65234 9.71484 6.53516 9.71484 6.41797 9.83203L5.77344 10.4766C5.65625 10.5938 5.59766 10.7109 5.59766 10.8281C5.59766 10.9453 5.65625 11.0625 5.77344 11.1211L12.2773 17.625H8C4.89453 17.625 2.375 15.1055 2.375 12ZM22.3555 26.4727L21.125 26.8828V28.875H9.875V26.8828L8.58594 26.4727C5.48047 25.3594 3.13672 22.7227 2.49219 19.5H28.4492C27.8047 22.7227 25.5195 25.3594 22.3555 26.4727Z"
                fill="#18BA51"
              />
            </svg>
          </div>
          <div>
            <p className="card-title">Эрүүл, баталгаат орц</p>
            <p>Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
      <div className="card-body shadow-md rounded-xl hover:shadow-2xl">
        <div>
          <div className=" py-4">
            <BookIcon />
          </div>
          <div>
            <p className="card-title">Хоолны өргөн сонголт</p>
            <p>Захиалга бэлтгэлийн явцыг хянах</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecipeCard;
