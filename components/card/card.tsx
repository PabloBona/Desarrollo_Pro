import LikeButton from "../assets/svg/LikeButton";

export function Card() {
  return (
    <div className="block  mt-5 app-container  mx-auto">
      <div className="mx-auto mt-12 undefined">
        <div className="max-w-[1103px] mx-auto mt-12 md:pl-0 ">
          <h2 className="title-2 mt-2.5">Populares en Querétaro</h2>
          <p className="mt-2 subtitle-2 text-app-grayDark">
            Lo que las personas piden más
          </p>
          <div className="card flex ">
            <div className="shadow-shadow1 m-1 w-[300px] rounded-[20px] h-[454px] overflow-hidden text-black bg-white border cursor-pointer">
              <div className="mx-[22px] mt-[25px] relative mb-10 h-full">
                <LikeButton/>
                <h2 className="title-3 text-start">Tienda de ropa femenina </h2>
                <div className="h-[70px] overflow-hidden">
                  <p className="mt-[5px] text-1 text-app-grayDark">
                    Tienda de Ropa
                  </p>
                </div>
                <p className="mt-3 text-app-blue text-2 ">shop.com</p>
                <div className="flex items-center gap-2 mt-4 text-2">
                  <span>
                    <div className="text-app-blackLight">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.89233 12.3778L1.89218 12.378C1.68609 12.7135 1.58337 13.0766 1.58337 13.4833V14.25C1.58337 14.5764 1.69093 14.8375 1.9272 15.0738C2.16257 15.3092 2.42326 15.4167 2.75004 15.4167H14.25C14.5766 15.4167 14.8378 15.3093 15.0738 15.0738C15.3093 14.8378 15.4167 14.5766 15.4167 14.25V13.4833C15.4167 13.0766 15.314 12.7135 15.1079 12.378L15.1078 12.3778C14.8991 12.0379 14.63 11.7873 14.2931 11.6121C13.3523 11.1422 12.4007 10.7916 11.4379 10.5581C10.4737 10.3249 9.4948 10.2083 8.50004 10.2083C7.50528 10.2083 6.52642 10.3249 5.56221 10.5581L1.89233 12.3778ZM1.89233 12.3778C2.10096 12.0379 2.37009 11.7873 2.70701 11.6121M1.89233 12.3778L2.70701 11.6121M2.70701 11.6121C3.64767 11.1422 4.59908 10.7917 5.56178 10.5582L2.70701 11.6121ZM8.50004 7.75001C7.64637 7.75001 6.93424 7.4548 6.32308 6.84364C5.71192 6.23247 5.41671 5.52035 5.41671 4.66668C5.41671 3.813 5.71192 3.10088 6.32308 2.48972C6.93424 1.87855 7.64637 1.58334 8.50004 1.58334C9.35371 1.58334 10.0658 1.87855 10.677 2.48972C11.2882 3.10088 11.5834 3.813 11.5834 4.66668C11.5834 5.52035 11.2882 6.23247 10.677 6.84364C10.0658 7.4548 9.35371 7.75001 8.50004 7.75001Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                  </span>
                  <p className="text-sm font-medium text-app-blackLight">
                    3 votos
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-shadow1 m-1 w-[300px] rounded-[20px] h-[454px] overflow-hidden text-black bg-white border cursor-pointer">
              <div className="mx-[22px] mt-[25px] relative mb-10 h-full">
                <button className=" ">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="like-button"
                    className="duration-200 focus:scale-105"
                  >
                    <circle
                      className="duration-300 cursor-pointer"
                      cx="24.5"
                      cy="24.5"
                      r="23.5"
                      fill="#D9D9D9"
                      stroke="white"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M18.15 14C14.2013 14 11 17.1565 11 21.0501C11 28.1001 19.45 34.5092 24 36C28.55 34.5092 37 28.1001 37 21.0501C37 17.1565 33.7987 14 29.85 14C27.432 14 25.2935 15.1838 24 16.9956C23.3407 16.0696 22.4648 15.3139 21.4465 14.7925C20.4282 14.271 19.2974 13.9992 18.15 14Z"
                      stroke="white"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <h2 className="title-3 text-start">Tienda de ropa femenina </h2>
                <div className="h-[70px] overflow-hidden">
                  <p className="mt-[5px] text-1 text-app-grayDark">
                    Tienda de Ropa
                  </p>
                </div>
                <p className="mt-3 text-app-blue text-2 ">shop.com</p>
                <div className="flex items-center gap-2 mt-4 text-2">
                  <span>
                    <div className="text-app-blackLight">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.89233 12.3778L1.89218 12.378C1.68609 12.7135 1.58337 13.0766 1.58337 13.4833V14.25C1.58337 14.5764 1.69093 14.8375 1.9272 15.0738C2.16257 15.3092 2.42326 15.4167 2.75004 15.4167H14.25C14.5766 15.4167 14.8378 15.3093 15.0738 15.0738C15.3093 14.8378 15.4167 14.5766 15.4167 14.25V13.4833C15.4167 13.0766 15.314 12.7135 15.1079 12.378L15.1078 12.3778C14.8991 12.0379 14.63 11.7873 14.2931 11.6121C13.3523 11.1422 12.4007 10.7916 11.4379 10.5581C10.4737 10.3249 9.4948 10.2083 8.50004 10.2083C7.50528 10.2083 6.52642 10.3249 5.56221 10.5581L1.89233 12.3778ZM1.89233 12.3778C2.10096 12.0379 2.37009 11.7873 2.70701 11.6121M1.89233 12.3778L2.70701 11.6121M2.70701 11.6121C3.64767 11.1422 4.59908 10.7917 5.56178 10.5582L2.70701 11.6121ZM8.50004 7.75001C7.64637 7.75001 6.93424 7.4548 6.32308 6.84364C5.71192 6.23247 5.41671 5.52035 5.41671 4.66668C5.41671 3.813 5.71192 3.10088 6.32308 2.48972C6.93424 1.87855 7.64637 1.58334 8.50004 1.58334C9.35371 1.58334 10.0658 1.87855 10.677 2.48972C11.2882 3.10088 11.5834 3.813 11.5834 4.66668C11.5834 5.52035 11.2882 6.23247 10.677 6.84364C10.0658 7.4548 9.35371 7.75001 8.50004 7.75001Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                  </span>
                  <p className="text-sm font-medium text-app-blackLight">
                    3 votos
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-shadow1 m-1 w-[300px] rounded-[20px] h-[454px] overflow-hidden text-black bg-white border cursor-pointer">
              <div className="mx-[22px] mt-[25px] relative mb-10 h-full">
                <button className=" ">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 49 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="like-button"
                    className="duration-200 focus:scale-105"
                  >
                    <circle
                      className="duration-300 cursor-pointer"
                      cx="24.5"
                      cy="24.5"
                      r="23.5"
                      fill="#D9D9D9"
                      stroke="white"
                      strokeWidth="2"
                    ></circle>
                    <path
                      d="M18.15 14C14.2013 14 11 17.1565 11 21.0501C11 28.1001 19.45 34.5092 24 36C28.55 34.5092 37 28.1001 37 21.0501C37 17.1565 33.7987 14 29.85 14C27.432 14 25.2935 15.1838 24 16.9956C23.3407 16.0696 22.4648 15.3139 21.4465 14.7925C20.4282 14.271 19.2974 13.9992 18.15 14Z"
                      stroke="white"
                      strokeWidth="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
                <h2 className="title-3 text-start">Tienda de ropa femenina </h2>
                <div className="h-[70px] overflow-hidden">
                  <p className="mt-[5px] text-1 text-app-grayDark">
                    Tienda de Ropa
                  </p>
                </div>
                <p className="mt-3 text-app-blue text-2 ">shop.com</p>
                <div className="flex items-center gap-2 mt-4 text-2">
                  <span>
                    <div className="text-app-blackLight">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.89233 12.3778L1.89218 12.378C1.68609 12.7135 1.58337 13.0766 1.58337 13.4833V14.25C1.58337 14.5764 1.69093 14.8375 1.9272 15.0738C2.16257 15.3092 2.42326 15.4167 2.75004 15.4167H14.25C14.5766 15.4167 14.8378 15.3093 15.0738 15.0738C15.3093 14.8378 15.4167 14.5766 15.4167 14.25V13.4833C15.4167 13.0766 15.314 12.7135 15.1079 12.378L15.1078 12.3778C14.8991 12.0379 14.63 11.7873 14.2931 11.6121C13.3523 11.1422 12.4007 10.7916 11.4379 10.5581C10.4737 10.3249 9.4948 10.2083 8.50004 10.2083C7.50528 10.2083 6.52642 10.3249 5.56221 10.5581L1.89233 12.3778ZM1.89233 12.3778C2.10096 12.0379 2.37009 11.7873 2.70701 11.6121M1.89233 12.3778L2.70701 11.6121M2.70701 11.6121C3.64767 11.1422 4.59908 10.7917 5.56178 10.5582L2.70701 11.6121ZM8.50004 7.75001C7.64637 7.75001 6.93424 7.4548 6.32308 6.84364C5.71192 6.23247 5.41671 5.52035 5.41671 4.66668C5.41671 3.813 5.71192 3.10088 6.32308 2.48972C6.93424 1.87855 7.64637 1.58334 8.50004 1.58334C9.35371 1.58334 10.0658 1.87855 10.677 2.48972C11.2882 3.10088 11.5834 3.813 11.5834 4.66668C11.5834 5.52035 11.2882 6.23247 10.677 6.84364C10.0658 7.4548 9.35371 7.75001 8.50004 7.75001Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </div>
                  </span>
                  <p className="text-sm font-medium text-app-blackLight">
                    3 votos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
