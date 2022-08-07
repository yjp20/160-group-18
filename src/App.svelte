<script lang="ts">
  //src: sveltestrap.js.org
  //src:sveltematerialui.com/
  import { navigate, useNavigate } from "svelte-navigator";

  //const navigate = useNavigate();
  import svelteLogo from "./assets/svelte.svg";
  import Counter from "./lib/Counter.svelte";
  import { Nav, NavItem, NavLink } from "sveltestrap";
  import { Navbar, NavbarBrand } from "sveltestrap";
  import { Styles } from "sveltestrap";
  import { Form, FormGroup, FormText, Input, Label } from "sveltestrap";
  import { Icon } from "sveltestrap";
  import { Router, Route, Link } from "svelte-navigator";
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
  } from "sveltestrap";
  import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle,
  } from "sveltestrap";
  let open = false;
  const toggle = () => (open = !open);
  const toggle2 = () => (open = !open);
</script>

<Styles />
<main>
  <div class="inner">
    <Navbar color="success" class="mb-2">
      <NavbarBrand href="/"
        ><span style="color:white">CoffeeTraceability</span></NavbarBrand
      >
      <Nav class="mt-3 ms-1" navbar>
        <NavItem>
          <FormGroup>
            <Input
              type="search"
              name="search"
              id="searc"
              placeholder="search coffee"
            />
          </FormGroup>
          <center>
            <p>
              <button on:click={() => navigate(-1)}>
                <Icon name="arrow-left-square-fill" style="color:black" />
              </button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="search_res">
                <Icon name="search" style="color:black" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="" style="color:white">filter </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="map">
                <Icon name="map" style="color:black;" />
              </a>

              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="manual">
                <Icon name="plus" style="color:black;" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="company" style="color:white">company</a>
            </p>
          </center>
        </NavItem>
      </Nav>
      <Nav navbar>
        <NavItem>
          <Icon name="tools" style="color:black;" />
        </NavItem>
      </Nav>
    </Navbar>
  </div>
  <Router>
    <header />
    <main>
      <Route path="/">
        <center
          >Tap the icon and scan the barcode
          <br />
          <img src="barcode.png" alt="barcode" on:click={toggle} />
        </center>
        <Modal isOpen={open} {toggle}>
          <ModalHeader {toggle}>Coffee successfully scanned</ModalHeader>
          <ModalBody
            >Details: Starbucks Expresso - rich flavor, 10 calories, 0 grams
            sugar
            <br />
            Brand: Starbucks
            <br />
            Beans: Arabica
            <br />
            Production: C.A.F.E. Practices
            <br />
            Roast: medium
          </ModalBody>
          <ModalFooter>
            <Button color="primary" on:click={toggle}>Submit</Button>
            <Button color="secondary" on:click={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Route>

      <Route path="search_res">
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;search results:</p>
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Starbucks Expresso</CardTitle>
          </CardHeader>
          <CardBody>
            <img
              src="coffeeimg.webp"
              alt="source:https://unsplash.com/photos/zUNs99PGDg0"
              height="15%"
              width="15%"
              on:click={toggle}
            />
            <br />
            <br />
            <CardSubtitle>Details</CardSubtitle>
            <CardText>
              Starbucks Expresso - rich flavor, 10 calories, 0 grams sugar
              <br />
              Brand: Starbucks
              <br />
              Beans: Arabica
              <br />
              Production: C.A.F.E. Practices
              <br />
              Roast: medium
            </CardText>
            <a href="stats"><Button>Learn More</Button></a>
          </CardBody>
        </Card>
      </Route>

      <Route path="company">
        <center
          >Tap the icon and scan the barcode (Company User)
          <br />
          <img src="barcode.png" alt="barcode" on:click={toggle} />
        </center>
        <Modal isOpen={open} {toggle}>
          <ModalHeader {toggle}>Coffee successfully scanned</ModalHeader>
          <ModalBody
            >Details: Starbucks Expresso - rich flavor, 10 calories, 0 grams
            sugar
            <br />
            Brand: Starbucks
            <br />
            Beans: Arabica
            <br />
            Production: C.A.F.E. Practices
            <br />
            Roast: medium
          </ModalBody>
          <ModalFooter>
            <Button color="primary" on:click={toggle}>Submit</Button>
            <Button color="secondary" on:click={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Route>

      <Route path="manual">
        <center> Enter the item manually: </center>
        <Form style="padding:1%;">
          <FormGroup>
            <Label for="name">Coffee Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="coffee name"
            />
          </FormGroup>
          <FormGroup>
            <Label for="name">Brand</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="enter brand"
            />
          </FormGroup>
          <FormGroup>
            <Label for="bean">Bean</Label>
            <Input type="text" name="bean" id="bean" />
          </FormGroup>
          <FormGroup>
            <Label for="production">Production</Label>
            <Input type="text" name="production" id="production" />
          </FormGroup>
          <FormGroup>
            <Label for="roast">Roast</Label>
            <Input type="text" name="roast" id="roast" />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>

        <br />
        <br />

        <center
          >Tap the icon and scan the barcode (Company User)
          <br />
          <img src="barcode.png" alt="barcode" on:click={toggle} />
        </center>
        <Modal isOpen={open} {toggle}>
          <ModalHeader {toggle}>Coffee successfully scanned</ModalHeader>
          <ModalBody
            >Details: Starbucks Expresso - rich flavor, 10 calories, 0 grams
            sugar
            <br />
            Brand: Starbucks
            <br />
            Beans: Arabica
            <br />
            Production: C.A.F.E. Practices
            <br />
            Roast: medium
          </ModalBody>
          <ModalFooter>
            <Button color="primary" on:click={toggle}>Submit</Button>
            <Button color="secondary" on:click={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Route>

      <Route path="stats">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Starbucks Expresso</CardTitle>
          </CardHeader>
          <CardBody>
            <img
              src="coffeeimg.webp"
              alt="source:https://unsplash.com/photos/zUNs99PGDg0"
              height="15%"
              width="15%"
              on:click={toggle}
            />
            <br />
            <br />
            <CardSubtitle>Details</CardSubtitle>
            <CardText>
              Starbucks Expresso - rich flavor, 10 calories, 0 grams sugar
              <br />
              Brand: Starbucks
              <br />
              Beans: Arabica
              <br />
              Production: C.A.F.E. Practices
              <br />
              Roast: medium
            </CardText>
          </CardBody>
        </Card>
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Production Process</CardTitle>
          </CardHeader>
          <CardBody>
            <CardSubtitle>Production Process:</CardSubtitle>
            <CardText />
          </CardBody>
        </Card>
      </Route>

      <Route path="map">
        <Card class="mb-3">
          <CardHeader>
            <CardTitle>Map</CardTitle>
          </CardHeader>
          <CardBody>
            <img
              src="map.png"
              alt="s"
              height="125%"
              width="125%"
              on:click={toggle}
            />
          </CardBody>
        </Card>
      </Route>
    </main>
  </Router>
</main>

<style>
  .inner {
    padding: 1%;
    margin: auto;
  }
</style>
