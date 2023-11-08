package com.example.ecommerce.controller;

import com.example.ecommerce.dto.CartDTO;
import com.example.ecommerce.dto.OrderDTO;
import com.example.ecommerce.entity.CartItem;
import com.example.ecommerce.entity.Review;
import com.example.ecommerce.exception.*;
import com.example.ecommerce.request.CartReq;
import com.example.ecommerce.request.CreateOrderReq;
import com.example.ecommerce.request.ReviewReq;
import com.example.ecommerce.service.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("api/v1")
public class UserController {

    private final CartService cartService;
    private final CartItemService cartItemService;
    private final OrderService orderService;
    private final UserService userService;
    private final ReviewService reviewService;

    public UserController(CartService cartService, CartItemService cartItemService, OrderService orderService, UserService userService, ReviewService reviewService) {
        this.cartService = cartService;
        this.cartItemService = cartItemService;
        this.orderService = orderService;
        this.userService = userService;
        this.reviewService = reviewService;
    }

    @GetMapping("/cart/{userId}")
    public ResponseEntity<CartDTO> getCart(@PathVariable Long userId) {
        return ResponseEntity.ok(cartService.findUserCart(userId));
    }

    @PostMapping("/cart/addToCart")
    public ResponseEntity<String> addToCart(@RequestBody CartReq cartReq) throws ProductException {

        try {
            return ResponseEntity.ok(cartService.addCartItem(cartReq));
        } catch (ProductException e) {
            throw new ProductException("Add product to cart fail");
        }
    }

    @DeleteMapping("/cart/deleteItem/{id}")
    public ResponseEntity<?> deleteCartItem(@PathVariable Long id, @RequestParam Long userId) throws CartItemException, UserException {
        return ResponseEntity.ok(cartItemService.deleteCartItem(id, userId));
    }

    @PutMapping("/cart/update/{id}")
    public ResponseEntity<CartItem> updateCart(@PathVariable Long id,
                                               @RequestParam Long userId,
                                               @RequestBody CartItem cartItem) throws CartItemException, UserException {
        return ResponseEntity.ok(cartItemService.updateCartItem(id, userId, cartItem));
    }

    @PostMapping("/checkout")
    public ResponseEntity<OrderDTO> createOrder(@RequestBody CreateOrderReq createOrderReq) throws UserException {
        return ResponseEntity.ok(orderService.createOrder(createOrderReq));
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<List<OrderDTO>> getOrders(@PathVariable("id") Long id) throws OrderException {
        try {
            return ResponseEntity.ok(userService.findOrdersByUser(id));
        } catch (OrderException e) {
            throw new OrderException(("Lỗi"));
        }
    }

    @GetMapping("/order/{id}")
    public ResponseEntity<OrderDTO> getOrder(@PathVariable("id") Long id) throws OrderException {
        try {
            return ResponseEntity.ok(orderService.findOrderById(id));
        } catch (OrderException e) {
            throw new OrderException(("Lỗi"));
        }
    }

    @PostMapping("/review")
    public ResponseEntity<Review> createReview(@RequestBody ReviewReq reviewReq) throws ReviewException {
        try {
            return ResponseEntity.ok(reviewService.createReview(reviewReq));
        } catch (ReviewException exception) {
            throw new ReviewException("Khong the tao review");
        }
    }
}
