export const RegistrationPage = () => {
  return (
    <>
      <div className="glass-container1">
        <div className="content1">
          <form action="/action_page.php">
            <div class="mb-3 mt-3">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
              />
            </div>
                    
            <div class="mb-3 mt-3">
              <input
                type="number"
                class="form-control"
                id="mobile"
                placeholder="Enter Mobile Number"
                name="mobile"
              />
            </div>

            <div class="mb-3 mt-3">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter Email"
                name="email"
              />
            </div>


            <div class="mb-3">
              <input
                type="password"
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pswd"
              />
            </div>
            <div class="form-check mb-3">
              <label class="form-check-label">
                <input
                  class="form-check-input"
                  type="checkbox"
                  name="remember"
                />{" "}
                Remember me
              </label>
            </div>
            <button type="submit" class="btn btn-primary" >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
