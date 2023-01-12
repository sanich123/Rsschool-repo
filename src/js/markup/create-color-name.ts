export function createColorName() {
    return `<section class="create-section">
        <form class="create-section__create-car create-car">
          <input class="create-car__name-input" type="text" placeholder="Type name of your car"/>
          <input class="create-car__color-input" type="color" value="#e66465" />
          <button class="create-car__btn" type="submit">CREATE</button>
        </form>
        <form class="create-section__update-car update-car">
          <input class="update-car__name-input" type="text" placeholder="Type name of car to update"/>
          <input class="update-car__color-input" type="color" value="#e66465" />
          <button class="update-car__btn" type="submit">UPDATE</button>
        </form>
      </section>`;
}